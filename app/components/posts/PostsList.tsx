import Stack from "@mui/material/Stack";

import { getPosts } from "@/lib/postsDB";
import { PostType } from "@/src/types/post-type";
import SinglePostListItem from "./SinglePostListItem";

export default async function PostsList({
    customList,
}: {
    customList: PostType[] | boolean;
}) {
    let finalList = [];

    if (!(customList instanceof Array) || customList.length <= 0) {
        finalList = await getPosts(false);
    }

    return (
        <>
            {finalList.length <= 0 && <p>No posts</p>}
            {finalList.length > 0 && (
                <>
                    <h2>Posts</h2>
                    <Stack spacing={2}>
                        {finalList.map((post) => {
                            return (
                                <SinglePostListItem
                                    post={post}
                                    key={post.title}
                                />
                            );
                        })}
                    </Stack>
                </>
            )}
        </>
    );
}
