import {
    encodeBase32LowerCaseNoPadding,
    encodeHexLowerCase,
} from "@oslojs/encoding";
import sql from "better-sqlite3";
import { sha256 } from "@oslojs/crypto/sha2";
import { cookies } from "next/headers";
import { cache } from "react";

const db = new sql("src/data/posts.db");

export const getCurrentSession = cache(
    async (): Promise<SessionValidationResult> => {
        const token = cookies().get("session")?.value ?? null;
        if (token === null) {
            return { session: null, user: null };
        }
        const result = validateSessionToken(token);
        return result;
    }
);

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
    db.exec(
        "INSERT INTO session (id, user_id, expires_at) VALUES (?, ?, ?)",
        session.id,
        session.userId,
        Math.floor(session.expiresAt.getTime() / 1000)
    );
    return session;
}

export function validateSessionToken(token: string): SessionValidationResult {
    const sessionId = encodeHexLowerCase(
        sha256(new TextEncoder().encode(token))
    );
    const row = db.get(
        "SELECT session.id, session.user_id, session.expires_at, user.id FROM session INNER JOIN user ON user.id = session.user_id WHERE id = ?",
        sessionId
    );
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
        db.exec("DELETE FROM session WHERE id = ?", session.id);
        return { session: null, user: null };
    }
    if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
        session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
        db.exec(
            "UPDATE session SET expires_at = ? WHERE id = ?",
            Math.floor(session.expiresAt.getTime() / 1000),
            session.id
        );
    }
    return { session, user };
}

export function invalidateSession(sessionId: string): void {
    db.exec("DELETE FROM session WHERE id = ?", sessionId);
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
