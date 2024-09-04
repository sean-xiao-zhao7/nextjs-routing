import MainHeader from "./components/MainHeader";
import "./globals.css";

export const metadata = {
    title: "Routing",
    description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}
