import NewsList from "../components/NewList";
import { DUMMY_NEWS } from "../../data/news-articles";

export default function NewsPage() {
    return <NewsList newsList={DUMMY_NEWS} />;
}
