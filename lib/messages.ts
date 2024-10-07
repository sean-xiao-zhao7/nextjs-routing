export const fetchAllMessages = async () => {
    let messages = [];
    const result = await fetch(
        `http://${process.env.BACKEND_BASE_URL}/${process.env.BACKEND_PORT}/messages`
    );
    const res = await result.json();
    if (res) {
        messages = res;
    }
    return messages;
};
