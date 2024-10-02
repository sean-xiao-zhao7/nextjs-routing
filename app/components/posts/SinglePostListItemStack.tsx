"use client";
import { useState } from "react";

import { Paper, Stack } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import BackendIconButton from "../buttons/BackendIconButton";

export default function SinglePostListItemStack({ post, deletePostHandler }) {
    const [done, setDone] = useState(false);

    return (
        <Paper sx={{ padding: 2 }}>
            <LinearProgress color="error" />
            <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
            >
                <div>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <BackendIconButton backendFunction={deletePostHandler} />
            </Stack>
        </Paper>
    );
}
