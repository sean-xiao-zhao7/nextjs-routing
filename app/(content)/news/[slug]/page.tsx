import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/src/lib/newsDB";

export default async function NewsDetailsPage({ params }: { params: any }) {
    const slug = params.slug;
    const newsArticle = await getNewsItem(slug);

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
