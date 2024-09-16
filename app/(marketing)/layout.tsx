import Link from "next/link";
import "@/app/globals.css";

export const metadata = {
    title: "REAL NEWS",
    description: "Definitely not fake news.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div id="home">
                    {children}
                    <Link href="/news">Go to news index</Link>{" "}
                    <Link href="/testing">Go to testing</Link>
                </div>
            </body>
        </html>
    );
}
