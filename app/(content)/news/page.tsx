import NewsList from "@/app/components/news/NewsList";
import { getAllNews } from "@/src/lib/newsDB";

export default async function NewsPage() {
    let result = [];
    try {
        result = await getAllNews();
    } catch (error) {
        throw new Error(error.message);
    }

    if (result.length <= 0) {
        return <>Loading all news...</>;
    }

    return <NewsList newsList={result} />;
}
