import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";

import theme from "@/src/theme";
import "@/app/globals.css";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata = {
    title: "REAL NEWS TEST",
    description: "Testing for news.",
};

export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body>
                <main className={roboto.variable}>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>
                            {props.children}
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </main>
            </body>
        </html>
    );
}
