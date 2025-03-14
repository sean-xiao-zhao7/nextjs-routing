import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import ClockClientComponent from "./ClockClientComponent";

export default async function ClockWidget() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <h1>Clock Widget</h1>
            <ClockClientComponent />
        </Suspense>
    );
}
