import { DUMMY_NEWS } from "../../../../data/news-articles";
import NewsList from "../../../components/NewList";

export default function YearNewsPage({ params }) {
    if (!params.year) {
        throw Error("No year provided.");
    }

    const newsList = DUMMY_NEWS.filter((news) =>
        news.date.includes(params.year.toString())
    );

    if (newsList.length <= 0) {
        return <h1>No articles for year {params.year}.</h1>;
    }

    return <NewsList newsList={newsList} />;
}
