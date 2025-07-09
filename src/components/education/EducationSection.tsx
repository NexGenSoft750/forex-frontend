import styles from './EducationSection.module.scss';
import { useTranslations } from '@/hooks/useTranslations';

export const EducationSection = () => {
    const { t } = useTranslations();

    return (
        <>
            <section className={styles.educationSection}>
                <header className={styles.educationSectionHeader}>
                    <div className={styles.educationSectionTitle}>
                        <h1>{t('insights.education.title')}</h1>
                    </div>
                    <h1 className={styles.educationSectionShortDescription}>
                        {t('insights.education.shortDescription.before')} <span className={styles.highlightedText}>{t('insights.education.shortDescription.highlight1')}</span> {t('insights.education.shortDescription.between')} <span className={styles.highlightedText}>{t('insights.education.shortDescription.highlight2')}</span>{t('insights.education.shortDescription.after')}
                    </h1>
                </header>
                <main>
                    <div className={styles.educationContainer}>
                        <div className={styles.educationCard}>
                            <header className={styles.educationCardHeader}>
                                <h2 className={styles.educationCardTitle}>
                                    Identify the Fundamental
                                    Bias
                                </h2>
                            </header>
                            <div className={styles.educationCardBody}>
                                <p className={styles.educationCardDescription}>
                                    Understanding fundamental bias in e-commerce is key to making smarter business decisions. It refers to the internal assumptions or preferences that influence how we design, market, or manage our stores.
                                    Analyzing data objectively helps uncover real trends versus assumptions.
                                </p>
                            </div>
                            <footer className={styles.educationCardFooter}>
                                <button className={styles.educationCardButton}>
                                    Learn More
                                </button>
                            </footer>
                        </div>
                        <div className={styles.educationCard}>
                            <header className={styles.educationCardHeader}>
                                <h2 className={styles.educationCardTitle}>
                                    Leverage Technical
                                    Analysis For Entries
                                </h2>
                            </header>
                            <div className={styles.educationCardBody}>
                                <p className={styles.educationCardDescription}>
                                    Understanding fundamental bias in e-commerce is key to making smarter business decisions. It refers to the internal assumptions or preferences that influence how we design, market, or manage our stores.
                                    Analyzing data objectively helps uncover real trends versus assumptions.
                                </p>
                            </div>
                            <footer className={styles.educationCardFooter}>
                                <button className={styles.educationCardButton}>
                                    Learn More
                                </button>
                            </footer>
                        </div>
                        <div className={styles.educationCard}>
                            <header className={styles.educationCardHeader}>
                                <h2 className={styles.educationCardTitle}>
                                    Risk Management
                                    is Key
                                </h2>
                            </header>
                            <div className={styles.educationCardBody}>
                                <p className={styles.educationCardDescription}>
                                    Understanding fundamental bias in e-commerce is key to making smarter business decisions. It refers to the internal assumptions or preferences that influence how we design, market, or manage our stores.
                                    Analyzing data objectively helps uncover real trends versus assumptions.
                                </p>
                            </div>
                            <footer className={styles.educationCardFooter}>
                                <button className={styles.educationCardButton}>
                                    Learn More
                                </button>
                            </footer>
                        </div>
                        <div className={styles.educationCard}>
                            <header className={styles.educationCardHeader}>
                                <h2 className={styles.educationCardTitle}>
                                    Adapt to your Trading
                                    Style
                                </h2>
                            </header>
                            <div className={styles.educationCardBody}>
                                <p className={styles.educationCardDescription}>
                                    Understanding fundamental bias in e-commerce is key to making smarter business decisions. It refers to the internal assumptions or preferences that influence how we design, market, or manage our stores.
                                    Analyzing data objectively helps uncover real trends versus assumptions.
                                </p>
                            </div>
                            <footer className={styles.educationCardFooter}>
                                <button className={styles.educationCardButton}>
                                    Learn More
                                </button>
                            </footer>
                        </div>
                    </div>
                </main>
                <footer className={styles.educationSectionFooter}>
                    <p>
                        {t('insights.education.footerDescription.before')} <span className={styles.highlightedText}>{t('insights.education.footerDescription.highlight')}</span>, {t('insights.education.footerDescription.content')}
                    </p>
                </footer>
            </section>
        </>
    );
};