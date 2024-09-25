"use client";

import { useFormStatus } from "react-dom";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LoadingButton from "@mui/lab/LoadingButton";

export default function FormSubmit() {
    const status = useFormStatus();

    return (
        <>
            <LoadingButton
                variant="contained"
                startIcon={<AddIcon />}
                type="submit"
                loading={status.pending}
                loadingPosition="start"
            >
                Submit
            </LoadingButton>
            <LoadingButton variant="text" startIcon={<RestartAltIcon />}>
                Reset
            </LoadingButton>
        </>
    );
}
