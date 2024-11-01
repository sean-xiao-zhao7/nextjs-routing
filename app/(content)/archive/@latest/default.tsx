import { getLatestNews } from "@/src/lib/newsDB";
import NewsList from "@/app/components/news/NewsList";

export default async function LatestPage() {
    return (
        <>
            <h2>Latest</h2>
            <NewsList newsList={await getLatestNews()} />
        </>
    );
}
