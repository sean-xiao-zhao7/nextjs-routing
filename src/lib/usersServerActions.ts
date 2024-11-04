"use server";

import { redirect } from "next/navigation";
import {
    initUsersDb,
    loginUser,
    registerUser,
    logoutUser,
    getSingleUserById,
} from "./usersDB";

export async function resetUserDatabase() {
    initUsersDb();
}

export async function registerAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");

    let errorMessage = "";

    if (
        username.length <= 0 ||
        password.length <= 0 ||
        firstname.length <= 0 ||
        lastname.length <= 0
    ) {
        errorMessage = "Please enter all info.";
    }

    if (errorMessage !== "") {
        return { errorMessage };
    }

    try {
        registerUser(username, password, firstname, lastname);
    } catch (e) {
        return { errorMessage: e.message };
    }
    redirect("/testing");
}

export async function loginAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    let errorMessage = "";

    if (username.length <= 0 || password.length <= 0) {
        errorMessage = "Please enter all info.";
    }

    if (errorMessage !== "") {
        return { errorMessage };
    }

    try {
        loginUser(username, password);
    } catch (e) {
        return { errorMessage: e.message };
    }
    redirect("/testing");
}

export async function logoutAction() {
    try {
        logoutUser();
    } catch (e) {
        return { errorMessage: e.message };
    }
    redirect("/");
}

export async function getSingleUserAction(userId) {
    if (!userId) {
        return { errorMessage: "User ID required for lookup." };
    }

    try {
        return getSingleUserById(userId);
    } catch (e) {
        throw new Error(e.message);
    }
}
