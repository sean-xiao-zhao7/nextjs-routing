import { initPostsDb } from "@/src/lib/posts";
import { CoffeeMaker } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function DatabasePage() {
    initPostsDb();

    return (
        <>
            <Button variant="contained" startIcon={<CoffeeMaker />}>
                Manage Database
            </Button>
        </>
    );
}
