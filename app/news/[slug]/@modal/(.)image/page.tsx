import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../../data/news-articles";

export default function ImagePage({ params }) {
    const article = DUMMY_NEWS.find((article) => article.slug === params.slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <div className="modal-backdrop" />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${article.image}`}
                        alt={article.image}
                    />
                </div>
            </dialog>
        </>
    );
}
