import { getLatestNews } from "@/lib/news";
import NewsList from "@/app/components/NewList";

export default function LatestPage() {
    return (
        <>
            <h2>Latest</h2>
            <NewsList newsList={getLatestNews()} />
        </>
    );
}
