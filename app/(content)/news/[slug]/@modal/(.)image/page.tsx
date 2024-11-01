import ModalBackdrop from "@/app/components/modal/ModalBackdrop";
import { getNewsItem } from "@/src/lib/newsDB";
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
                    <img src={article.image} alt="News image" />
                </div>
            </dialog>
        </>
    );
}
