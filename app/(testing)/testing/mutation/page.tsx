import { File } from "buffer";

import { storePost } from "@/lib/posts";
import PostForm from "@/app/components/form/PostForm";

export default async function MutationTestIndexPage() {
    async function mutationAction(_, formData: FormData) {
        "use server";
        const title = formData.get("title");
        const content = formData.get("content");
        let imageFile = formData.get("image-file");
        let imageUrl = "";
        if (imageFile instanceof File && imageFile.size > 0) {
            imageUrl = imageFile.name;
        }

        const userId = 1;

        const result = await storePost({ title, content, imageUrl, userId });
        if (!result) {
            throw new Error("Error storing post with title " + title);
        }
    }

    return <PostForm mutationAction={mutationAction} />;
}
