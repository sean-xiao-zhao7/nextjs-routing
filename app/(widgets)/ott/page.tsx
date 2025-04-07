import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default async function OTT() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <h1>OTT</h1>
        </Suspense>
    );
}
