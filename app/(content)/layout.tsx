import MainHeader from "@/app/components/headers/MainHeader";
import "@/app/globals.css";

export const metadata = {
    title: "REAL NEWS",
    description: "Definitely not fake news.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <MainHeader testing={false} />
            {children}
        </>
    );
}
