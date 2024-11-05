import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import LoginForm from "@/app/components/form/LoginForm";
import { loginAction } from "@/lib/usersServerActions";

export default function LoginPage() {
    return (
        <>
            <Suspense fallback={<LinearProgress />}>
                <h1>Login</h1>
                <LoginForm mutationAction={loginAction} />
            </Suspense>
        </>
    );
}
