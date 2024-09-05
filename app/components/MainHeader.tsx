import Link from "next/link";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href="/">REAL NEWS</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/news">ALL NEWS</Link>
                    </li>
                    <li>
                        <Link href="/archive">OLD NEWS</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
