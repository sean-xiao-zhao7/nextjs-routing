import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body className={roboto.variable}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        {props.children}
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
