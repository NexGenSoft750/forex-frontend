import styles from './TradingNews.module.scss';
import TradingNewsContent from './TradingNewsContent';

export default function TradingNews() {
    return (
        <>
            <section className={styles["trading-news"]}>
                <h1 className={styles["trading-news__heading"]}>Trading News Worldwide</h1>
                <TradingNewsContent />
            </section>
        </>
    );
}