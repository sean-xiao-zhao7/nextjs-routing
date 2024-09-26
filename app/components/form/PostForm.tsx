"use client";
import { useFormState } from "react-dom";

import { Box, Paper, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

import UploadButton from "@/app/components/utils/UploadButton";
import FormSubmit from "@/app/components/form/FormSubmit";

export default function PostForm({ mutationAction }) {
    const [formState, formAction] = useFormState(mutationAction, {});

    return (
        <>
            <h1>Mutation testing page</h1>
            <form action={formAction}>
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
                            <FormSubmit />
                        </Stack>
                    </Stack>
                </Paper>
            </form>
        </>
    );
}
