import { cache } from "react";
import sql from "better-sqlite3";

const db = sql("src/data/data.db");

const dummyNewsList: NewsArticleType[] = [
    {
        id: 0,
        title: "News 1",
        content: "News 1 content",
        image: "/images/news/ai-robot.jpg",
        date: "2024",
        slug: "asdfasdfasdf0",
    },
    {
        id: 1,
        title: "News 2",
        content: "News 2 content",
        image: "/images/news/beaver.jpg",
        date: "2024",
        slug: "asdfasdfasd1",
    },
    {
        id: 2,
        title: "News 3",
        content: "News 3 content",
        image: "/images/news/hiking.jpg",
        date: "2024",
        slug: "asdfasdfasdf2",
    },
];

export type NewsArticleType = {
    id: number;
    slug: string;
    title: string;
    image: string;
    date: string;
    content: string;
};

export function initNewsDb() {
    db.exec(`
    DROP TABLE IF EXISTS news;
    `);
    db.exec(`
    CREATE TABLE IF NOT EXISTS news (
        id INTEGER NOT NULL PRIMARY KEY,
        slug TEXT NOT NULL UNIQUE, 
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        image TEXT,
        date TEXT
    )`);
    for (const news of dummyNewsList) {
        db.exec(
            `INSERT INTO news (id, slug, title, content, image, date) VALUES (${news.id}, '${news.slug}', '${news.title}', '${news.content}', '${news.image}', '${news.date}')`
        );
    }
}

export const getAllNews = cache(async (): Promise<NewsArticleType[]> => {
    const news = db.prepare("SELECT * FROM news").all();
    return news;
});

export async function getNewsItem(slug) {
    const newsItem = db.prepare("SELECT * FROM news WHERE slug = ?").get(slug);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return newsItem;
}

export async function getLatestNews() {
    const latestNews = db
        .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
        .all();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return latestNews;
}

export async function getAvailableNewsYears() {
    const years = db
        .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
        .all()
        .map((year) => year.year);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return years;
}

export function getAvailableNewsMonths(year) {
    return db
        .prepare(
            "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
        )
        .all(year)
        .map((month) => month.month);
}

export async function getNewsForYear(year) {
    const news = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
        )
        .all(year);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return news;
}

export async function getNewsForYearAndMonth(year, month) {
    const news = db
        .prepare(
            "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
        )
        .all(year, month);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return news;
}
