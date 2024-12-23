"use client";

import { CoffeeMaker } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

export default function ManageDatabaseClient({
    resetUserDatabase,
    resetPostsDatabase,
    initNewsDbAction,
}) {
    return (
        <Stack spacing={2}>
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
            <Button
                variant="contained"
                startIcon={<CoffeeMaker />}
                onClick={() => initNewsDbAction()}
            >
                Reset News Database
            </Button>
        </Stack>
    );
}
