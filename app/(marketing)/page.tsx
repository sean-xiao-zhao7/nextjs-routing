import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import logo from "@/assets/logo.jpg";
import Image from "next/image";

export default function HomePage() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <h1>Welcome</h1>
            <div
                style={{
                    height: "12vw",
                    width: "12vw",
                    position: "relative",
                    textAlign: "center",
                    margin: "auto",
                }}
            >
                <Image
                    src={logo}
                    alt="Newspaper logo"
                    priority
                    fill
                    sizes="12vw"
                />
            </div>
            <p>Welcome to my portfolio built with NextJS.</p>
        </Suspense>
    );
}
