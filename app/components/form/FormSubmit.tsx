"use client";

// react
import { useFormStatus } from "react-dom";

// mui
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LoadingButton from "@mui/lab/LoadingButton";

export default function FormSubmit({ resetFormHandler, submitLabel }) {
    const status = useFormStatus();

    return (
        <>
            <LoadingButton
                variant="contained"
                startIcon={<AddIcon />}
                type="submit"
                loading={status.pending}
                loadingPosition="start"
                sx={{ borderRadius: 0 }}
            >
                {submitLabel ? submitLabel : "Submit"}
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
