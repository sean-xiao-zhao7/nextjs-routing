"use server";

import Link from "next/link";

export default async function MainHeader({ testing }: { testing: Boolean }) {
    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/news">Blog</Link>
                    </li>
                    <li>
                        <Link href="/testing">Widgets</Link>
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
            ) : (
                <nav>
                    <ul>
                        <li>
                            <Link href="/news">Blog</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
