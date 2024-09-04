import { DUMMY_NEWS } from "../../../data/news-articles";

export default function NewsDetailsPage({ params }: { params: any }) {
    const slug = params.slug;
    const newsArticle = DUMMY_NEWS.find((article) => article.slug === slug);
    return (
        <>
            <h1>{newsArticle.title}</h1>
        </>
    );
}
