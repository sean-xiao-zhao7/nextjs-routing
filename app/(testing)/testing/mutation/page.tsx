import { Box, Button, Paper, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import InputLabel from "@mui/material/InputLabel";

import UploadButton from "@/app/components/utils/VisuallyHiddenInput";

export default function MutationTestIndexPage() {
    return (
        <>
            <h1>Mutation testing page</h1>
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
                    />
                    <Stack spacing={0} direction={"row"} marginTop={0}>
                        <Box>
                            <InputLabel htmlFor="input-with-icon-adornment">
                                Image URL
                            </InputLabel>
                            <UploadButton id="title" text="Choose file" />
                        </Box>
                    </Stack>
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
                    />
                    <Stack spacing={1} direction={"row-reverse"}>
                        <Button variant="contained" startIcon={<AddIcon />}>
                            Submit
                        </Button>
                        <Button variant="text" startIcon={<RestartAltIcon />}>
                            Reset
                        </Button>
                    </Stack>
                </Stack>
            </Paper>
        </>
    );
}
