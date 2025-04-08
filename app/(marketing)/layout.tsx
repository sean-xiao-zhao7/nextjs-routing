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
                <Link href="/clock">See Portfolio</Link>{" "}
                <Link href="/news">Read Blog</Link>{" "}
                <Link href="/testing">Play Widgets</Link>{" "}
            </div>
        </>
    );
}
