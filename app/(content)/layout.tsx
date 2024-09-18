import MainHeader from "@/app/components/MainHeader";
import "@/app/globals.css";

export const metadata = {
    title: "REAL NEWS",
    description: "Definitely not fake news.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <MainHeader />
            {children}
        </>
    );
}
