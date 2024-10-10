import LoginForm from "@/app/components/form/LoginForm";

export default function LoginPage() {
    async function mutationAction(prevState, formData: FormData) {
        "use server";

        let errors = [];

        const title = formData.get("title");
        const content = formData.get("content");
        let imageFile = formData.get("image-file");

        let imageUrl = "";
        if (imageFile instanceof File && imageFile.size > 0) {
            imageUrl = imageFile.name;
        }

        // error checking
        if (!title || (title instanceof String && title.trim().length <= 0)) {
            errors.push("Title is empty.");
        }
        if (
            !content ||
            (content instanceof String && content.trim().length <= 0)
        ) {
            errors.push("Content is empty.");
        }
        if (errors.length > 0) {
            return { errors };
        }

        const userId = 1;

        return { title: "", content: "", imageUrl: "", userId: "", done: true };
    }

    return (
        <>
            <h1>Login</h1>
            <LoginForm mutationAction={mutationAction} />
        </>
    );
}
