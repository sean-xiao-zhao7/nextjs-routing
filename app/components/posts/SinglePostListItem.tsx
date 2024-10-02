import { revalidatePath } from "next/cache";

import { PostType } from "@/src/types/post-type";
import { deleteSinglePost } from "@/lib/posts";
import SinglePostListItemStack from "./SinglePostListItemStack";

export default function SinglePostListItem({ post }: { post: PostType }) {
    const deletePostHandler = async () => {
        "use server";
        deleteSinglePost(post.id);
        revalidatePath("testing/mutation");
    };

    return (
        <SinglePostListItemStack
            post={post}
            deletePostHandler={deletePostHandler}
        />
    );
}
