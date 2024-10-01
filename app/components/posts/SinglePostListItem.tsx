import { revalidatePath } from "next/cache";
import { Paper, Stack } from "@mui/material";

import { PostType } from "@/src/types/post-type";
import { deleteSinglePost } from "@/lib/posts";
import BackendIconButton from "../buttons/BackendIconButton";

export default function SinglePostListItem({ post }: { post: PostType }) {
    const deletePostHandler = async () => {
        "use server";
        deleteSinglePost(post.id);
        revalidatePath("testing/mutation");
    };

    return (
        <Paper sx={{ padding: 2 }}>
            <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
            >
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <BackendIconButton backendFunction={deletePostHandler} />
            </Stack>
        </Paper>
    );
}
