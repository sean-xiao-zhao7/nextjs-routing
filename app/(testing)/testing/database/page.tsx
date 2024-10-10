import { initUsersDb } from "@/lib/users";
import { initPostsDb } from "@/src/lib/posts";
import { CoffeeMaker } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function DatabasePage() {
    //initPostsDb();
    initUsersDb();

    return (
        <>
            <Button variant="contained" startIcon={<CoffeeMaker />} disabled>
                Manage Database
            </Button>
        </>
    );
}
