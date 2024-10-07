"use client";

export default function RootError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    console.log(error);
    return (
        <>
            <h1>Error</h1>
            {error.message}
        </>
    );
}
