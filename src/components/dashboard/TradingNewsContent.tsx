import styles from './TradingNewsContent.module.scss';
import TradingNewsList from './TradingNewsList';
import TradingNewsCard from './TradingNewsCard';

export default function TradingNewsContent() {
    const tradingNews = [
        {
            id: 1,
            image: "news-1.svg",
            authorName: "forexNEWS",
            title: "Incredible $50 Million Homes Around the World",
            viewsCount: "50",
            commentsCount: "0",
        },
        {
            id: 2,
            image: "news-2.svg",
            authorName: "forexMONEY",
            title: "Revealed: The Crucial Role of Gold Throughout History",
            viewsCount: "120",
            commentsCount: "5",
        },
        {
            id: 3,
            image: "news-3.svg",
            authorName: "Starstriker",
            title: "Vladimir Putin: Russia is 'willing' to end the conflict in Ukraine",
            viewsCount: "34k",
            commentsCount: "1.2k",
        },
        {
            id: 4,
            image: "news-4.svg",
            authorName: "forexNEWS",
            title: "Lebanon: The 226th Brigade Located a Truck With 40 Rocket...",
            viewsCount: "88",
            commentsCount: "12",
        },
        {
            id: 5,
            image: "news-5.svg",
            authorName: "forexMONEY",
            title: "These are the least visited countries in the world",
            viewsCount: "250",
            commentsCount: "30",
        },
        {
            id: 6,
            image: "news-6.svg",
            authorName: "forexMONEY",
            title: "Revealed: The Crucial Role of Gold Throughout History",
            viewsCount: "120",
            commentsCount: "5",
        },
    ]
    return (
        <TradingNewsList className={styles["trading-news__list"]}>
            {
                tradingNews?.map((newsItem) => (
                    <TradingNewsCard
                        key={newsItem.id}
                        {...newsItem}
                    />
                ))
            }
        </TradingNewsList>
    );
} 