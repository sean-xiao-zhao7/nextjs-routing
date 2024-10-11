"use server";

export async function registerAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");

    let errors = {};

    if (
        username.length <= 0 ||
        password.length <= 0 ||
        firstname.length <= 0 ||
        lastname.length <= 0
    ) {
        errors["empty"] = "Please enter all info.";
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    return { username, password, firstname, lastname };
}

export async function loginAction(prevState, formData) {
    const username = formData.get("username");
    const password = formData.get("password");

    let errors = {};

    if (username.length <= 0 || password.length <= 0) {
        errors["empty"] = "Please enter all info.";
    }

    if (Object.keys(errors).length > 0) {
        return { errors };
    }

    return { username, password };
}
