export const fetchAllMessages = async (xid?: string) => {
    let messages = [];
    try {
        const result = await fetch(
            `http://${process.env.BACKEND_BASE_URL}:${process.env.BACKEND_PORT}/messages`,
            {
                headers: { "X-ID": xid ? xid : "lib" },
            }
        );
        const res = await result.json();
        messages = res;
        return messages;
    } catch (e) {
        throw new Error("Unable to fetch from backend.");
    }
};

export type MessageType = {
    id: Number;
    text: String;
};
