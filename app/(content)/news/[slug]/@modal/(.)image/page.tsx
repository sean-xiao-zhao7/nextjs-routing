import ModalBackdrop from "@/app/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
    const article = await getNewsItem(params.slug);

    if (!article) {
        notFound();
    }

    return (
        <>
            <ModalBackdrop />
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
