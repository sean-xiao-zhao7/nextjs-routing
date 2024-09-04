import Link from "next/link";
import { DUMMY_NEWS } from "../../data/news-articles";
// import Image from "next/image";

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map((newsArticle) => {
                    return (
                        <li key={newsArticle.id}>
                            <Link href={`/news/${newsArticle.slug}`}>
                                <img
                                    src={`/images/news/${newsArticle.image}`}
                                    alt={newsArticle.title}
                                />
                            </Link>
                            <Link href={`/news/${newsArticle.slug}`}>
                                {newsArticle.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
