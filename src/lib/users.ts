import { cache } from "react";
import sql from "better-sqlite3";

const db = new sql("src/data/posts.db");

export function initUsersDb() {
    db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT,
      password TEXT
    )`);
    db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
}

initUsersDb();

export const getSingleUser = cache(async function getSingleUser(maxNumber) {
    const stmt = db.prepare(`
    SELECT posts.id, image_url AS image, title, content, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName, COUNT(likes.post_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.post_id = posts.id and likes.user_id = 2) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY createdAt DESC
    `);

    return stmt.all();
});
