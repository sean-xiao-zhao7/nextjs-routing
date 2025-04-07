"use server";

import Link from "next/link";

import "./header.css";

export default async function WidgetsHeader() {
    return (
        <header id="widgets-header" className="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/clock">Digital Clock</Link>
                    </li>
                    <li>
                        <Link href="/ott">OTT Financial</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
