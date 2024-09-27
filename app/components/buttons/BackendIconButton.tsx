"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BackendIconButton({ backendFunction }) {
    const handler = () => {
        backendFunction();
    };
    return (
        <IconButton aria-label="delete" onClick={handler}>
            <DeleteIcon />
        </IconButton>
    );
}
