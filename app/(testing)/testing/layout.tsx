import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import MainHeader from "@/app/components/headers/MainHeader";

export default async function TestingLayout(props: React.PropsWithChildren) {
    return (
        <Suspense fallback={<LinearProgress />}>
            <MainHeader testing={true} />
            {props.children}
        </Suspense>
    );
}
