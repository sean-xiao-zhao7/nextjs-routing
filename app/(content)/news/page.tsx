import NewsList from "@/app/components/NewList";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
    const result = getAllNews();

    if (result.length <= 0) {
        return <>Loading...</>;
    }

    return <NewsList newsList={result} />;
}
