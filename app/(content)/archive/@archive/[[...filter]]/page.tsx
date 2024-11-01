import Link from "next/link";
import { Suspense } from "react";

import {
    getAllNews,
    getAvailableNewsYears,
    getNewsForYearAndMonth,
} from "@/src/lib/newsDB";
import NewsList from "@/app/components/news/NewsList";

async function NewsArchiveContent({ params }) {
    let newsList = [];

    if (params.filter) {
        if (params.filter[0]) {
            newsList = await getAllNews();
            newsList = newsList.filter((news) =>
                news.date.includes(params.filter[0].toString())
            );
        } else if (params.filter[1]) {
            newsList = await getNewsForYearAndMonth(
                params.filter[0],
                params.filter[1]
            );
        }
    }

    let content;
    if (newsList.length <= 0) {
        content = <p>No articles.</p>;
    } else {
        content = <NewsList newsList={newsList} />;
    }

    return content;
}

export default async function YearNewsPage({ params }) {
    const years = await getAvailableNewsYears();

    return (
        <>
            <header id="archive-header">
                <nav>
                    <ul>
                        {years.map((year) => (
                            <li key={year}>
                                <Link href={`/archive/${year}`}>{year}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<p>Loading archived year news.</p>}>
                <NewsArchiveContent params={params} />
            </Suspense>
        </>
    );
}
