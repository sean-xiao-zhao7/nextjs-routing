import { cache } from "react";
import sql from "better-sqlite3";

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
      username TEXT,
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
