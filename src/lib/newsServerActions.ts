"use server";

import { redirect } from "next/navigation";

import { initNewsDb } from "./newsDB";

export async function initNewsDbAction() {
    try {
        initNewsDb();
    } catch (error) {
        return { error: error.message };
    }
    redirect("/testing");
}
