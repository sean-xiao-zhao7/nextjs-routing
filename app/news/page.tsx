import Link from "next/link";
import { DUMMY_NEWS } from "../../data/news-articles";

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul>
                {DUMMY_NEWS.map((newsArticle) => {
                    return (
                        <li key={newsArticle.id}>
                            <Link href={`/news/${newsArticle.id}`}>
                                {newsArticle.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
