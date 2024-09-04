import Link from "next/link";

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li>
                    <Link href="/news/1">News 1</Link>
                </li>
            </ul>
        </>
    );
}
