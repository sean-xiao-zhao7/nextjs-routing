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
                onClick={resetUserDatabase}
            >
                Rest User Database
            </Button>
            <Button
                variant="contained"
                startIcon={<CoffeeMaker />}
                onClick={resetPostsDatabase}
            >
                Rest Posts Database
            </Button>
        </>
    );
}
