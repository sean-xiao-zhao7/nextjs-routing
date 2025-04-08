import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import logo from "@/assets/logo.jpg";
import Image from "next/image";

export default function HomePage() {
    return (
        <Suspense fallback={<LinearProgress />}>
            <h1>Welcome to Sean Xiao's Portfolio</h1>
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
            <p>
                In recent years, the global energy landscape has been undergoing
                a significant transformation, driven by advancements in
                renewable energy technologies and a growing commitment to combat
                climate change.
            </p>
        </Suspense>
    );
}
