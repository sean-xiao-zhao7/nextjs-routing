"use client";

import MainHeader from "./components/headers/MainHeader";

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
            <MainHeader testing={false} />
            <h1>Error</h1>
            {error.message}
        </>
    );
}
