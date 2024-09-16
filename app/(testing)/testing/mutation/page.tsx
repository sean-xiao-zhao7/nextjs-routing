import { Button, Paper, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function MutationTestIndexPage() {
    return (
        <>
            <h1>Mutation testing page</h1>
            <Paper sx={{ padding: 2 }}>
                <Stack spacing={2}>
                    <h2>Add a new post</h2>
                    <TextField id="title" label="Title" variant="outlined" />
                    <TextField
                        id="image-url"
                        label="Image URL"
                        variant="outlined"
                    />
                    <TextField
                        id="content"
                        label="Content"
                        variant="outlined"
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
