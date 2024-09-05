import { DUMMY_NEWS } from "../../../../data/news-articles";
import NewsList from "../../../components/NewList";

export default function YearNewsPage({ year }: { year: number }) {
    if (!year) {
        throw Error("No year provided.");
    }
    return (
        <NewsList newsList={DUMMY_NEWS.filter((news) => news.year === year)} />
    );
}
