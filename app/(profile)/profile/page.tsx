import { getCurrentSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const currentSession = await getCurrentSession();
    if (!currentSession.session) redirect("/login");

    return (
        <>
            <h1>Profile</h1>
        </>
    );
}
