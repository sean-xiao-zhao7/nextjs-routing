// import { redirect } from "next/navigation";

// import { getCurrentSession } from "@/lib/auth";
import AuthHeader from "../components/headers/AuthHeader";

export default async function AuthLayout({ children }) {
    // const result = await getCurrentSession();
    // if (result.session) {
    //     redirect("/");
    // }
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
