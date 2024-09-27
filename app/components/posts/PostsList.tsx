import Stack from "@mui/material/Stack";

import { getPosts } from "@/lib/posts";
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
        <Stack spacing={2}>
            {finalList.map((post) => {
                return <SinglePostListItem post={post} key={post.title} />;
            })}
        </Stack>
    );
}
