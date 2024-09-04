import { DUMMY_NEWS } from "../../../data/news-articles";

export default function NewsDetailsPage({ params }: { params: any }) {
    const slug = params.slug;
    const newsArticle = DUMMY_NEWS.find((article) => article.slug === slug);
    return (
        <article className="news-article">
            <header>
                <img
                    src={`/images/news/${newsArticle.image}`}
                    alt={newsArticle.title}
                />
                <h1>{newsArticle.title}</h1>
                <time dateTime={newsArticle.date}>{newsArticle.date}</time>
                <p>{newsArticle.content}</p>
            </header>
        </article>
    );
}
