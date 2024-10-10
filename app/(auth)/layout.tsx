import AuthHeader from "../components/headers/AuthHeader";

export default function AuthLayout({ children }) {
    return (
        <>
            <AuthHeader />
            {children}
        </>
    );
}
