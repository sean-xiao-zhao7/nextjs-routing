import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

import logo from "@/assets/logo.jpg";
import Image from "next/image";

export default function HomePage() {
    return (
        <Suspense fallback={<LinearProgress />}>
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
            <p>
                This shift is marked by increasing investments in solar, wind,
                and other sustainable energy sources, as well as supportive
                policies and international agreements aimed at reducing
                greenhouse gas emissions. One of the most notable developments
                in this arena is the continued decline in the cost of renewable
                energy technologies.
            </p>
        </Suspense>
    );
}
