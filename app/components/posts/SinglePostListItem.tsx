import { revalidatePath } from "next/cache";

import { PostType } from "@/src/types/post-type";
import { deleteSinglePost } from "@/lib/postsDB";
import SinglePostListItemStack from "./SinglePostListItemStack";

export default function SinglePostListItem({ post }: { post: PostType }) {
    const deletePostHandler = async () => {
        "use server";
        await deleteSinglePost(post.id);
        revalidatePath("testing/mutation");
        return true;
    };

    return (
        <SinglePostListItemStack
            post={post}
            deletePostHandler={deletePostHandler}
        />
    );
}
