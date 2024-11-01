import ManageDatabaseClient from "./ManageDatabaseClient";
import { resetUserDatabase } from "@/lib/usersServerActions";
import { resetPostsDatabase } from "@/lib/postsServerActions";
import { initNewsDbAction } from "@/lib/newsServerActions";

export default function DatabasePage() {
    return (
        <ManageDatabaseClient
            initNewsDbAction={initNewsDbAction}
            resetPostsDatabase={resetPostsDatabase}
            resetUserDatabase={resetUserDatabase}
        />
    );
}
