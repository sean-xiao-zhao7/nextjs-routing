"use server";

import { redirect } from "next/navigation";

import { initNewsDb } from "./newsDB";

export async function initNewsDbAction() {
    try {
        initNewsDb();
    } catch (error) {
        throw new Error(error.message);
    }
    redirect("/testing");
}
