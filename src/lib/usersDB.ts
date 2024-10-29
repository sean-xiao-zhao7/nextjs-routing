import { cache } from "react";
import sql from "better-sqlite3";
import crypto from "node:crypto";
import { generateSessionToken, createSession } from "./auth";

const db = new sql("src/data/posts.db");

export function initUsersDb() {
    db.exec(`
    DROP TABLE IF EXISTS users;
    DROP TABLE IF EXISTS sessions;
    `);
    db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL PRIMARY KEY,
        firstname TEXT UNIQUE, 
        lastname TEXT,
        username TEXT NOT NULL,
        password TEXT
    )`);
    db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
        id TEXT NOT NULL PRIMARY KEY,
        expires_at INTEGER NOT NULL,
        user_id INTEGER NOT NULL, 
        FOREIGN KEY (user_id) REFERENCES users(id)
    )`);
}

export const getSingleUserByUsernameDB = cache(async function getSingleUser(
    username: string
) {
    const stmt = db.prepare(`
    SELECT first_name, last_name, username
    FROM users
    WHERE username = ?
    `);

    return stmt.get(username);
});

export function hashUserPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex");

    const hashedPassword = crypto.scryptSync(password, salt, 64);
    return hashedPassword.toString("hex") + ":" + salt;
}

export function verifyPassword(storedPassword, suppliedPassword) {
    const [hashedPassword, salt] = storedPassword.split(":");
    const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
    const suppliedPasswordBuf = crypto.scryptSync(suppliedPassword, salt, 64);
    return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}

export function registerUser(username, password, firstname, lastname) {
    const hashedPassword = hashUserPassword(password);
    const result = db
        .prepare(
            "INSERT INTO users (username, password, firstname, lastname) VALUES (?, ?, ?, ?)"
        )
        .run(username, hashedPassword, firstname, lastname);
    const token = generateSessionToken();
    createSession(token, result.lastInsertRowid);
    return token;
}

export function loginUser(username, password) {
    const result = db
        .prepare("SELECT id, password FROM users WHERE username = ?")
        .get(username);

    let message = "Either username or password is wrong. Please try again.";
    if (!result) {
        throw new Error(message);
    }

    const verified = verifyPassword(result.password, password);
    if (verified) {
        const token = generateSessionToken();
        createSession(token, result.id);
        return token;
    } else {
        throw new Error(message);
    }
}
