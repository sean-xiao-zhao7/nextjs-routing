import { redirect } from "next/navigation";
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import ProfilePageClientComponent from "./ProfilePageClientComponent";

import { getCurrentSession } from "@/lib/auth";
import { logoutAction } from "@/lib/usersServerActions";

export default async function ProfilePage() {
    const currentSession = await getCurrentSession();
    if (!currentSession.session) redirect("/login");

    return (
        <Suspense fallback={<LinearProgress />}>
            <h1>Profile</h1>
            <ProfilePageClientComponent
                user={currentSession.user}
                logoutAction={logoutAction}
            />
        </Suspense>
    );
}
