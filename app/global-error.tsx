"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h1>Error</h1>
                <p>Please try again later.</p>
            </body>
        </html>
    );
}
