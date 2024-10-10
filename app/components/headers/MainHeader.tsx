import Link from "next/link";
import AccountButton from "../buttons/AccountButton";

export default function MainHeader() {
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
                        <Link href="/news">ALL NEWS</Link>
                    </li>
                    <li>
                        <Link href="/archive">OLD NEWS</Link>
                    </li>
                    <li>
                        <AccountButton link="/archive" />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
