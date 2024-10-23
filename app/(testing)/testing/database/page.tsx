import { resetUserDatabase } from "@/lib/usersServerActions";
import { resetPostsDatabase } from "@/lib/postsServerActions";
import ManageDatabaseClient from "./manageDatabaseClient";

export default function DatabasePage() {
    return (
        <ManageDatabaseClient
            resetPostsDatabase={resetPostsDatabase}
            resetUserDatabase={resetUserDatabase}
        />
    );
}
