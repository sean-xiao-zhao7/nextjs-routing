import RegisterForm from "@/app/components/form/RegisterForm";
import { registerAction } from "@/lib/usersActions";

export default function RegisterPage() {
    return (
        <>
            <h1>Register</h1>
            <RegisterForm mutationAction={registerAction} />
        </>
    );
}
