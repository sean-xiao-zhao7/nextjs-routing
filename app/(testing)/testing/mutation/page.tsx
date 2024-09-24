import { Box, Button, Paper, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import UploadButton from "@/app/components/utils/UploadButton";
import { storePost } from "@/lib/posts";
import { File } from "buffer";

export default async function MutationTestIndexPage() {
    const mutationAction = async (formData: FormData) => {
        "use server";
        const title = formData.get("title");
        const content = formData.get("content");
        let imageFile = formData.get("image-file");
        let imageUrl = "";
        if (imageFile instanceof File && imageFile.size > 0) {
            imageUrl = imageFile.name;
        }

        const userId = 1;

        const result = await storePost({ title, content, imageUrl, userId });
        if (!result) {
            throw new Error("Error storing post with title " + title);
        }
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
                                <UploadButton
                                    id="image-file"
                                    text="Upload image"
                                    name="image-file"
                                />
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
