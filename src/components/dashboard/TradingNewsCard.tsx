import Image from 'next/image';
import styles from './TradingNewsCard.module.scss';

type TradingNewsItemProps = {
    id: number;
    image: string;
    authorName: string;
    title: string;
    viewsCount: string;
    commentsCount: string;
};

export default function TradingNewsCard(newsItem: TradingNewsItemProps) {
    return (
        <>
            <div className={styles["trading-news-card"]}>
                <header className={styles["trading-news-card__header"]}>
                    <div className={styles["trading-news-card__img-wrapper"]}>
                        <Image
                            src={`images/dashboard/news/${newsItem.image}`}
                            alt="forex news img"
                            fill
                            className={styles["trading-news-card__img"]}
                        />
                    </div>
                    <span
                        className={`${styles["trading-news-card__author-name"]} ${styles[newsItem.authorName]}`}
                    >
                        {newsItem.authorName}
                    </span>
                </header>
                <div className={styles["trading-news-card__body"]}>
                    <p className={styles["trading-news-card__title"]}>{newsItem.title}</p>
                </div>
                <footer className={styles["trading-news-card__footer"]}>
                    <div className={styles["trading-news-card__stats"]}>
                        <div className={styles["views-box"]}>
                            <Image
                                src="images/dashboard/news/views-icon.svg"
                                alt="news views icon img"
                                width={15}
                                height={15}
                                className={styles["views-box__icon"]}
                            />
                            <span className={styles["views-box__count"]}>{newsItem.viewsCount}</span>
                        </div>
                        <div className={styles["comment-box"]}>
                            <Image
                                src="images/dashboard/news/comments-icon.svg"
                                alt="news comments icon img"
                                width={15}
                                height={15}
                                className={styles["comment-box__icon"]}
                            />
                            <span className={styles["comment-box__count"]}>{newsItem.commentsCount}</span>
                        </div>
                    </div>
                    <div className={styles["actions-icon"]}>
                        <Image
                            src="images/dashboard/news/actions-icon.svg"
                            alt="news comments icon img"
                            width={15}
                            height={15}
                            className={styles["actions-icon__img"]}
                        />
                    </div>
                </footer>
            </div>
        </>
    );
}