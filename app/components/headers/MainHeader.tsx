"use server";

import Link from "next/link";

export default async function MainHeader({ testing }: { testing: Boolean }) {
    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">HOME</Link>
                    </li>
                    <li>
                        <Link href="/news">BLOG HOME</Link>
                    </li>
                    <li>
                        <Link href="/testing">WIDGETS TESTING</Link>
                    </li>
                </ul>
            </nav>
            {testing ? (
                <nav>
                    <ul>
                        <li>
                            <Link href="/testing/mutation">
                                Mutation Testing
                            </Link>
                        </li>
                    </ul>
                </nav>
            ) : null}
        </header>
    );
}
