import { fetchAllMessages } from "@/src/lib/messages";
import TestingHeader from "@/app/components/headers/TestingHeader";

export default async function TestingLayout(props: React.PropsWithChildren) {
    const messages = await fetchAllMessages("testing layout");

    return (
        <>
            <TestingHeader />
            <p>{messages.length} messages in inbox.</p>
            {props.children}
        </>
    );
}
