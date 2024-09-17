import Link from "next/link";

export default function TestingHeader() {
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
            <nav>
                <ul>
                    <li>
                        <Link href="/testing/mutation">Mutation Testing</Link>
                    </li>
                    <li>
                        <Link href="/testing/database">
                            Database management
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
