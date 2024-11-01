import { getNewsItem } from "@/src/lib/newsDB";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
    const article = await getNewsItem(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="fullscreen-image">
            <img src={article.image} alt="News image" />
        </div>
    );
}
