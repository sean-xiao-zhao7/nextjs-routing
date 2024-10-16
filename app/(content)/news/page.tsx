import NewsList from "@/app/components/news/NewsList";
import { getAllNews } from "@/src/lib/newsDB";

export default async function NewsPage() {
    const result = await getAllNews();

    if (result.length <= 0) {
        return <>Loading...</>;
    }

    return <NewsList newsList={result} />;
}
