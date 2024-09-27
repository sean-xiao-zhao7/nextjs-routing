import { Paper } from "@mui/material";

import { PostType } from "@/src/types/post-type";

export default function SinglePostListItem({ post }: { post: PostType }) {
    return (
        <Paper sx={{ padding: 2 }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Paper>
    );
}
