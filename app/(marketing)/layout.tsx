import Link from "next/link";
import "@/app/globals.css";

export const metadata = {
    title: "Sean Xiao",
    description: "Definitely not fake news.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <div id="home">
                {children}
                <Link href="/news">Read blog</Link>{" "}
                <Link href="/testing">See resume</Link>{" "}
                <Link href="/clock">Play widgets</Link>{" "}
            </div>
        </>
    );
}
