"use client";

import { CoffeeMaker } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ManageDatabaseClient({
    resetUserDatabase,
    resetPostsDatabase,
}) {
    return (
        <>
            <Button
                variant="contained"
                startIcon={<CoffeeMaker />}
                onClick={() => resetUserDatabase()}
            >
                Reset Users Database
            </Button>
            <Button
                variant="contained"
                startIcon={<CoffeeMaker />}
                onClick={() => resetPostsDatabase()}
            >
                Reset Posts Database
            </Button>
        </>
    );
}
