import NewsList from "../components/NewList";
import { DUMMY_NEWS } from "../../data/news-articles";

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <NewsList newsList={DUMMY_NEWS} />
        </>
    );
}
