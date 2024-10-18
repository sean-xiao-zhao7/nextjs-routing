"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            light: "#238939",
            main: "#18782f",
            dark: "#01591c",
            contrastText: "#fff",
        },
        secondary: {
            light: "#1e795d",
            main: "#186950",
            dark: "#0f4d36",
            contrastText: "#e1f2ee",
        },
    },
    typography: {
        fontFamily: "var(--font-roboto)",
    },
});

export default theme;
