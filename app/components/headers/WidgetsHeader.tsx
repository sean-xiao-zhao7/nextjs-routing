"use server";

import Link from "next/link";

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
                </ul>
            </nav>
        </header>
    );
}
