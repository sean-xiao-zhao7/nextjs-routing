"use client";
import { useFormState } from "react-dom";

import { Box, Paper, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

import UploadButton from "@/app/components/utils/UploadButton";
import FormSubmit from "@/app/components/form/FormSubmit";
import { useRef } from "react";

export default function PostForm({ mutationAction }) {
    const [formState, formAction] = useFormState(mutationAction, {
        title: "",
        content: "",
        imageUrl: "",
        userId: 1,
    });

    const formRef: React.RefObject<HTMLFormElement> = useRef();
    const resetFormHandler = () => {
        if (formRef && formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <>
            <h1>Mutation testing page</h1>
            <form action={formAction} ref={formRef}>
                <Paper sx={{ padding: 2 }}>
                    <Stack spacing={2}>
                        <h2>Add a new post</h2>

                        <TextField
                            id="title"
                            label="Title"
                            variant="outlined"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            name="title"
                            required
                        />
                        <TextField
                            id="content"
                            label="Content"
                            variant="outlined"
                            slotProps={{
                                inputLabel: {
                                    shrink: true,
                                },
                            }}
                            multiline
                            rows={5}
                            name="content"
                            required
                            defaultValue={formState.content}
                        />
                        <Stack spacing={0} direction={"row"} marginTop={0}>
                            <Box>
                                <UploadButton
                                    id="image-file"
                                    text="Upload image"
                                    name="image-file"
                                />
                            </Box>
                        </Stack>
                        {formState.errors && (
                            <ul className="form-errors">
                                {formState.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                        <Stack spacing={1} direction={"row-reverse"}>
                            <FormSubmit resetFormHandler={resetFormHandler} />
                        </Stack>
                    </Stack>
                </Paper>
            </form>
        </>
    );
}
