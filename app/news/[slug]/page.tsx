import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../data/news-articles";
import Link from "next/link";

export default function NewsDetailsPage({ params }: { params: any }) {
    const slug = params.slug;
    const newsArticle = DUMMY_NEWS.find((article) => article.slug === slug);

    if (!newsArticle) {
        notFound();
    }

    return (
        <article className="news-article">
            <header>
                <Link href={`${newsArticle.slug}/image`}>
                    <img
                        src={`/images/news/${newsArticle.image}`}
                        alt={newsArticle.title}
                    />
                </Link>
                <h1>{newsArticle.title}</h1>
                <time dateTime={newsArticle.date}>{newsArticle.date}</time>
                <p>{newsArticle.content}</p>
            </header>
        </article>
    );
}
