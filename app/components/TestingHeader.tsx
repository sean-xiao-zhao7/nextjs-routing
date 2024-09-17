import Link from "next/link";

export default function TestingHeader() {
    return (
        <header id="main-header">
            <nav>
                <ul>
                    <li>
                        <Link href="/">Main home</Link>
                    </li>
                    <li>
                        <Link href="/news">News home</Link>
                    </li>
                    <li>
                        <Link href="/testing">Testing home</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link href="/testing/mutation">Mutation Testing</Link>
                    </li>
                    <li>
                        <Link href="/database">Database management</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
