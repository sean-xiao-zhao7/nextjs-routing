import { DUMMY_NEWS } from "../../../../data/news-articles";

export default function ImagePage({ params }) {
    const article = DUMMY_NEWS.find((article) => article.slug === params.slug);
    return (
        <div className="fullscreen-image">
            <img src={`/images/news/${article.image}`} alt={article.image} />
        </div>
    );
}
