import LoginForm from "@/app/components/form/LoginForm";
import { loginAction } from "@/lib/usersActions";

export default function LoginPage() {
    return (
        <>
            <h1>Login</h1>
            <LoginForm mutationAction={loginAction} />
        </>
    );
}
