import NewsList from "@/app/components/news/NewsList";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
    const result = await getAllNews();

    if (result.length <= 0) {
        return <>Loading...</>;
    }

    return <NewsList newsList={result} />;
}
