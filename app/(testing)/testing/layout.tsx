import { fetchAllMessages } from "@/src/lib/messages";
import TestingHeader from "@/app/components/headers/TestingHeader";

export default async function TestingLayout(props: React.PropsWithChildren) {
    let messagesElement = null;
    try {
        const messages = await fetchAllMessages("testing layout");
        messagesElement = <p>{messages.length} messages in inbox.</p>;
    } catch (e) {
        messagesElement = <p>Error fetching messages.</p>;
    }

    return (
        <>
            <TestingHeader />
            {messagesElement}
            {props.children}
        </>
    );
}
