import { File } from "buffer";
import { Stack } from "@mui/material";

import { storePost } from "@/lib/posts";
import PostForm from "@/app/components/form/PostForm";
import PostsList from "@/app/components/posts/PostsList";

export default async function MutationTestIndexPage() {
    async function mutationAction(_, formData: FormData) {
        "use server";
        let errors = [];

        const title = formData.get("title");
        const content = formData.get("content");
        let imageFile = formData.get("image-file");

        let imageUrl = "";
        if (imageFile instanceof File && imageFile.size > 0) {
            imageUrl = imageFile.name;
        }

        // error checking
        if (!title || (title instanceof String && title.trim().length <= 0)) {
            errors.push("Title is empty.");
        }
        if (
            !content ||
            (content instanceof String && content.trim().length <= 0)
        ) {
            errors.push("Content is empty.");
        }
        if (errors.length > 0) {
            return { errors };
        }

        const userId = 1;
        const result = await storePost({ title, content, imageUrl, userId });
        if (!result) {
            errors.push("Could not save post due to server error.");
            return { errors };
        }

        return { title, content, imageUrl, userId };
    }

    return (
        <Stack spacing={2}>
            <PostForm mutationAction={mutationAction} />
            <PostsList customList={false} />
        </Stack>
    );
}
