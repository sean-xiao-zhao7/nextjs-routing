"use server";

import Link from "next/link";

export default async function WidgetsHeader() {
    return (
        <header id="widgets-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/clock">Digital Clock</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
