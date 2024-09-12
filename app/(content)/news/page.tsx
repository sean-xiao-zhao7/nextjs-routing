import NewsList from "@/app/components/NewList";

export default async function NewsPage() {
    const response = await fetch("http://localhost:8080/news");
    if (!response.ok) {
        throw new Error("Server error fetching news.");
    }

    const result = await response.json();

    if (result.length <= 0) {
        return <>Loading...</>;
    }

    return <NewsList newsList={result} />;
}
