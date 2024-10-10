import ModalBackdrop from "@/app/components/modal/ModalBackdrop";
import { getNewsItem } from "@/src/lib/news";
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
