import { getPosts } from "@/lib/posts";
import { PostType } from "@/src/types/post-type";

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
        <ul>
            {finalList.map((post) => {
                return (
                    <li key={post.title}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                );
            })}
        </ul>
    );
}
