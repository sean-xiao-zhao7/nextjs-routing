import { Stack } from "@mui/material";

import MyPaper from "@/app/components/containers/MyPaper";
import { fetchAllMessages } from "@/lib/messages";

export default async function CachingPage() {
    const messages = await fetchAllMessages();

    return (
        <>
            <h1>Caching Testing</h1>
            {messages.length <= 0 && <p>No messages yet.</p>}
            {messages && (
                <Stack spacing={2}>
                    {messages.map((message) => {
                        return (
                            <MyPaper key={message.id}>{message.text}</MyPaper>
                        );
                    })}
                </Stack>
            )}
        </>
    );
}
