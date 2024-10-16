"use client";
import { useState } from "react";

import { Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import MyPaper from "../containers/MyPaper";

export default function SinglePostListItemStack({ post, deletePostHandler }) {
    const [deleting, setDeleting] = useState(false);

    const handler = async () => {
        setDeleting(true);
        const result = await deletePostHandler();
        if (result) {
            setDeleting(false);
        }
    };

    return (
        <MyPaper>
            {deleting && <LinearProgress color="error" />}
            <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
            >
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <IconButton
                    aria-label="delete"
                    onClick={handler}
                    disabled={deleting}
                >
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </MyPaper>
    );
}
