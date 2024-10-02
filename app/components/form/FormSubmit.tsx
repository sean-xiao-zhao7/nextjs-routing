"use client";

import { useFormStatus } from "react-dom";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LoadingButton from "@mui/lab/LoadingButton";

export default function FormSubmit({ resetFormHandler }) {
    const status = useFormStatus();

    if (!status.pending) {
        resetFormHandler();
    }

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
            <LoadingButton
                variant="text"
                startIcon={<RestartAltIcon />}
                onClick={resetFormHandler}
            >
                Reset
            </LoadingButton>
        </>
    );
}
