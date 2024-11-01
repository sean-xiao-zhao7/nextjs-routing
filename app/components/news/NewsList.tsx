import Link from "next/link";
import { NewsArticleType } from "@/lib/newsDB";

export default function NewsList({
    newsList,
}: {
    newsList: NewsArticleType[];
}) {
    return (
        <ul className="news-list">
            {newsList.map((newsArticle) => {
                return (
                    <li key={newsArticle.id}>
                        <Link href={`/news/${newsArticle.slug}`}>
                            <img
                                src={newsArticle.image}
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
    );
}
