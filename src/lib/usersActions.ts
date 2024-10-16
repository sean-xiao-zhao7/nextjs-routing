"use server";

import { loginUser, registerUser } from "./usersDB";

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
        registerUser(username, password);
    } catch (e) {
        return { errorMessage: e.message };
    }

    return {
        username,
        message: "Registered.",
    };
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
        const resultMessage = loginUser(username, password);
        return { username, message: resultMessage };
    } catch (e) {
        return { errorMessage: e.message };
    }
}
