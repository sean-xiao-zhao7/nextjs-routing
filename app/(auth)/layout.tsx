import { redirect } from "next/navigation";

import { isAuth } from "@/lib/auth";
import AuthHeader from "../components/headers/AuthHeader";

export default async function AuthLayout({ children }) {
    const result = await isAuth();
    if (result) {
        redirect("/");
    }
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
