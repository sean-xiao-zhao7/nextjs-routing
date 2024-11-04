import { redirect } from "next/navigation";

import ProfilePageClientComponent from "./ProfilePageClientComponent";

import { getCurrentSession } from "@/lib/auth";
import { logoutAction } from "@/lib/usersServerActions";

export default async function ProfilePage() {
    const currentSession = await getCurrentSession();
    if (!currentSession.session) redirect("/login");

    return (
        <>
            <h1>Profile</h1>
            <ProfilePageClientComponent
                user={currentSession.user}
                logoutAction={logoutAction}
            />
        </>
    );
}
