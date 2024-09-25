"use client";

import { useFormStatus } from "react-dom";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button } from "@mui/material";

export default function FormSubmit() {
    const status = useFormStatus();
    return (
        <>
            <Button variant="contained" startIcon={<AddIcon />} type="submit">
                Submit
            </Button>
            <Button variant="text" startIcon={<RestartAltIcon />}>
                Reset
            </Button>
        </>
    );
}
