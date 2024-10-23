import ManageDatabaseClient from "./ManageDatabaseClient";
import { resetUserDatabase } from "@/lib/usersServerActions";
import { resetPostsDatabase } from "@/lib/postsServerActions";

export default function DatabasePage() {
    return (
        <ManageDatabaseClient
            resetPostsDatabase={resetPostsDatabase}
            resetUserDatabase={resetUserDatabase}
        />
    );
}
