export const fetchAllMessages = async () => {
    let messages = [];
    try {
        const result = await fetch(
            `http://${process.env.BACKEND_BASE_URL}/${process.env.BACKEND_PORT}/messages`
        );
        const res = await result.json();
        messages = res;
        return res;
    } catch (e) {
        throw new Error("Unable to fetch from backend.");
    }
};
