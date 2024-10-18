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
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
    typography: {
        fontFamily: "var(--font-roboto)",
    },
});

export default theme;
