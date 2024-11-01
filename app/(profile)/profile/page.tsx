import { isAuth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const authCheck = await isAuth();
    if (!authCheck) redirect("/login");

    return (
        <>
            <h1>Profile</h1>
        </>
    );
}
