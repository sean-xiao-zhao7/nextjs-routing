import { DUMMY_NEWS } from "../../../../data/news-articles";
import {
    getAvailableNewsYears,
    getAvailableNewsMonths,
} from "../../../../lib/news";
import NewsList from "../../../components/NewList";
import Link from "next/link";

export default function YearNewsPage({ params }) {
    const years = getAvailableNewsYears();
    let content = <p>Select filter from above.</p>;

    if (params.filter) {
        const newsList = DUMMY_NEWS.filter((news) =>
            news.date.includes(params.year.toString())
        );

        if (newsList.length <= 0) {
            return <h1>No articles for year {params.year}.</h1>;
        }

        content = <NewsList newsList={newsList} />;
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
