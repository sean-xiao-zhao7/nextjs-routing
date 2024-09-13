import { DUMMY_NEWS } from "@/data/news-articles";
import { getAvailableNewsYears, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "@/app/components/NewList";
import Link from "next/link";

export default async function YearNewsPage({ params }) {
    const years = await getAvailableNewsYears();
    let content = null;

    if (params.filter) {
        let newsList = [];
        if (params.filter[0]) {
            newsList = DUMMY_NEWS.filter((news) =>
                news.date.includes(params.filter[0].toString())
            );
        } else if (params.filter[1]) {
            newsList = await getNewsForYearAndMonth(
                params.filter[0],
                params.filter[1]
            );
        }

        if (newsList.length <= 0) {
            content = <p>No articles.</p>;
        } else {
            content = <NewsList newsList={newsList} />;
        }
    }

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
            {content}
        </>
    );
}
