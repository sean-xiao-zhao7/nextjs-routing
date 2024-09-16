import logo from "@/assets/logo.jpg";
import Link from "next/link";

export default function HomePage() {
    return (
        <div id="home">
            <img src={logo.src} alt="A newspaper" />
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
            <Link href="/news">Go to news index</Link>{" "}
            <Link href="/mutation">Go to mutation test</Link>
        </div>
    );
}
