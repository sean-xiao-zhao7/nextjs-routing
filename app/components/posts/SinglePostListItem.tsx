import { Paper, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { PostType } from "@/src/types/post-type";

export default function SinglePostListItem({ post }: { post: PostType }) {
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
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </Paper>
    );
}
