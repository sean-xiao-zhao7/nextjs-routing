import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import RegisterForm from "@/app/components/form/RegisterForm";
import { registerAction } from "@/lib/usersServerActions";

export default function RegisterPage() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <h1>Register</h1>
            <RegisterForm mutationAction={registerAction} />
        </Suspense>
    );
}
