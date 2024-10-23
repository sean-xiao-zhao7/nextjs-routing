"use server";

import { initPostsDb } from "./postsDB";

export async function resetPostsDatabase() {
    initPostsDb();
}
