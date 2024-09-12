"use client";

import { useEffect, useState } from "react";
import NewsList from "@/app/components/NewList";

export default function NewsPage() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async function () {
            const response = await fetch("http://localhost:8080/news");
            if (!response.ok) {
                throw new Error("Server error fetching news.");
            }

            const result = await response.json();
            setNews(result);
        };
        getNews();
    }, []);

    if (news.length <= 0) {
        return <>Loading...</>;
    }

    return <NewsList newsList={news} />;
}
