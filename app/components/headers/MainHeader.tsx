"use server";

import Link from "next/link";

import AccountButton from "../buttons/AccountButton";
import { isAuth } from "@/lib/auth";

export default async function MainHeader({ testing }: { testing: Boolean }) {
    const isAuthed = await isAuth();

    let authElement;
    if (!isAuthed)
        authElement = (
            <li>
                <AccountButton link="/login" />
            </li>
        );

    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">MAIN HOME</Link>
                    </li>
                    <li>
                        <Link href="/news">NEWS HOME</Link>
                    </li>
                    <li>
                        <Link href="/testing">TESTING HOME</Link>
                    </li>
                </ul>
            </nav>
            {testing ? (
                <nav>
                    <ul>
                        <li>
                            <Link href="/testing/caching">Caching Testing</Link>
                        </li>
                        <li>
                            <Link href="/testing/mutation">
                                Mutation Testing
                            </Link>
                        </li>
                        <li>
                            <Link href="/testing/database">
                                Database management
                            </Link>
                        </li>
                        {authElement}
                    </ul>
                </nav>
            ) : (
                <nav>
                    <ul>
                        <li>
                            <Link href="/news">ALL NEWS</Link>
                        </li>
                        <li>
                            <Link href="/archive">OLD NEWS</Link>
                        </li>
                        {authElement}
                    </ul>
                </nav>
            )}
        </header>
    );
}
