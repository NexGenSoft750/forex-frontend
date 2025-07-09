import styles from "./TechnicalHeatmap.module.scss";
import Image from "next/image";
import { useTranslations } from '@/hooks/useTranslations';

const TechnicalHeatmap = () => {
    const { t } = useTranslations();

    return (
        <>
            <section className={styles.technicalHeatmapSection}>
                <header className={styles.technicalHeatmapSectionHeader}>
                    <div className={styles.technicalHeatmapSectionTitle}>
                        <h1>{t('insights.technicalHeatmap.title')} <span className={styles.highlightedText}>{t('insights.technicalHeatmap.titleHighlight')}</span></h1>
                    </div>
                    <h1 className={styles.technicalHeatmapSectionShortDescription}>
                        {t('insights.technicalHeatmap.shortDescription.before')} <span className={styles.highlightedText}>{t('insights.technicalHeatmap.shortDescription.highlight')}</span> {t('insights.technicalHeatmap.shortDescription.after')}
                    </h1>
                </header>
                <main>
                    <div className={styles.technicalHeatmapContainer}>
                        <div className={styles.technicalHeatmapCard}>
                            <div className={styles.technicalHeatmapCardImageWrapper}>
                                <Image
                                    src="/images/insights/technical-heatmap.png"
                                    alt={t('insights.technicalHeatmap.imageAlt')}
                                    className={styles.technicalHeatmapCardImage}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                            <div className={styles.technicalHeatmapCardContent}>
                                <p className={styles.technicalHeatmapCardDescription}>
                                    {t('insights.technicalHeatmap.description.before')} <span className={styles.highlightedText}>{t('insights.technicalHeatmap.description.highlight')}</span>, {t('insights.technicalHeatmap.description.content')}
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default TechnicalHeatmap;
