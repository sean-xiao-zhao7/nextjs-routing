"use client";

import { Box, Button, Paper, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

import UploadButton from "@/app/components/utils/VisuallyHiddenInput";

export default function MutationTestIndexPage() {
    const mutationAction = (formData: FormData) => {
        const title = formData.get("title");
    };

    return (
        <>
            <h1>Mutation testing page</h1>
            <form action={mutationAction}>
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
                        />
                        <Stack spacing={0} direction={"row"} marginTop={0}>
                            <Box>
                                <UploadButton id="title" text="Upload image" />
                            </Box>
                        </Stack>
                        <Stack spacing={1} direction={"row-reverse"}>
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                type="submit"
                            >
                                Submit
                            </Button>
                            <Button
                                variant="text"
                                startIcon={<RestartAltIcon />}
                            >
                                Reset
                            </Button>
                        </Stack>
                    </Stack>
                </Paper>
            </form>
        </>
    );
}
