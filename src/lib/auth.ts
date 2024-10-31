import { cache } from "react";
import { cookies } from "next/headers";

import sql from "better-sqlite3";

import { sha256 } from "@oslojs/crypto/sha2";
import {
    encodeBase32LowerCaseNoPadding,
    encodeHexLowerCase,
} from "@oslojs/encoding";

const db = new sql("src/data/posts.db");

export const isAuth = cache(async (): Promise<SessionValidationResult> => {
    const token = cookies().get("session")?.value ?? null;
    if (token === null) {
        return { session: null, user: null };
    }
    const result = validateSessionToken(token);
    return result;
});

export function setSessionTokenCookie(token: string, expiresAt: Date): void {
    cookies().set("session", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        expires: expiresAt,
        path: "/",
    });
}

export function deleteSessionTokenCookie(): void {
    cookies().set("session", "", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 0,
        path: "/",
    });
}

export function generateSessionToken(): string {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const token = encodeBase32LowerCaseNoPadding(bytes);
    return token;
}

export function createSession(token: string, userId: number): Session {
    const sessionId = encodeHexLowerCase(
        sha256(new TextEncoder().encode(token))
    );
    const session: Session = {
        id: sessionId,
        userId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    };
    const expiresAt = Math.floor(session.expiresAt.getTime() / 1000);
    db.prepare(
        "INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)"
    ).run(session.id, session.userId, expiresAt);
    return session;
}

export function validateSessionToken(token: string): SessionValidationResult {
    const sessionId = encodeHexLowerCase(
        sha256(new TextEncoder().encode(token))
    );
    const row = db
        .prepare(
            "SELECT sessions.id AS session_id, sessions.user_id, sessions.expires_at, users.id FROM sessions INNER JOIN users ON users.id = sessions.user_id WHERE sessions.id = ?"
        )
        .get(sessionId);
    if (row === null) {
        return { session: null, user: null };
    }
    const session: Session = {
        id: row[0],
        userId: row[1],
        expiresAt: new Date(row[2] * 1000),
    };
    const user: User = {
        id: row[3],
    };
    if (Date.now() >= session.expiresAt.getTime()) {
        db.prepare("DELETE FROM sessions WHERE id = ?").run(session.id);
        return { session: null, user: null };
    }
    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        db.prepare("UPDATE sessions SET expires_at = ? WHERE id = ?").run(
            Math.floor(session.expiresAt.getTime() / 1000),
            session.id
        );
    }
    return { session, user };
}

export function invalidateSession(sessionId: string): void {
    db.prepare("DELETE FROM sessions WHERE id = ?").run(sessionId);
}

export type SessionValidationResult =
    | { session: Session; user: User }
    | { session: null; user: null };

export interface Session {
    id: string;
    userId: number;
    expiresAt: Date;
}

export interface User {
    id: number;
}
