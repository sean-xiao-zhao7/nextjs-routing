import MainHeader from "@/app/components/headers/MainHeader";
import "@/app/globals.css";

export const metadata = {
    title: "Blog",
    description: "Blog.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <MainHeader testing={false} />
            {children}
        </>
    );
}
