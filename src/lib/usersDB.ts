import { cache } from "react";
import sql from "better-sqlite3";
import crypto from "node:crypto";

const db = new sql("src/data/posts.db");

export function initUsersDb() {
    db.exec(`
    DROP TABLE users;
    `);
    db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      username TEXT NOT NULL,
      password TEXT
    )`);
    db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY, 
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

export function registerUser(username, password) {
    const hashedPassword = hashUserPassword(password);
    const result = db
        .prepare("INSERT INTO users (username, password) VALUES (?, ?)")
        .run(username, hashedPassword);
    return result.lastInsertRowid;
}

export function loginUser(username, password) {
    const result = db
        .prepare("SELECT password FROM users WHERE username = ?")
        .get(username);

    if (!result) {
        throw new Error("No such user with username " + username);
    }

    const verified = verifyPassword(result.password, password);
    if (verified) {
        return "Authed";
    } else {
        return "No auth";
    }
}
