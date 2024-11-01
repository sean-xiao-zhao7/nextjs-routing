import { fetchAllMessages } from "@/src/lib/messages";

import MainHeader from "@/app/components/headers/MainHeader";
import { getCurrentSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function TestingLayout(props: React.PropsWithChildren) {
    const currentSession = await getCurrentSession();
    if (!currentSession.session) {
        redirect("/login");
    }

    let messagesElement = null;
    try {
        const messages = await fetchAllMessages("testing layout");
        messagesElement = <p>{messages.length} messages in inbox.</p>;
    } catch (e) {
        messagesElement = <p>Error fetching messages.</p>;
    }

    return (
        <>
            <MainHeader testing={true} />
            {messagesElement}
            {props.children}
        </>
    );
}
