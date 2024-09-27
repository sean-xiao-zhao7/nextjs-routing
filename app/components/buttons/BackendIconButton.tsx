"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function BackendIconButton({ backendFunction }) {
    const handler = async () => {
        const result = await backendFunction();
        console.log(result);
    };
    return (
        <IconButton aria-label="delete" onClick={handler}>
            <DeleteIcon />
        </IconButton>
    );
}
