import styles from './FundamentalEdgeInsight.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

export function FundamentalEdgeInsight() {
    const t = useTranslations('insights.fundamentalEdge');

    const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <span className={styles.highlightedText}>{children}</span>
    );

    return (
        <section className={styles.fundamentalEdgeInsight}>
            <div className={styles.fundamentalEdgeInsightContainer}>
                <div className={styles.fundamentalEdgeInsightContent}>
                    <header className={styles.fundamentalEdgeInsightHeader}>
                        <div className={styles.fundamentalEdgeInsightHeaderTitle}>
                            <h1>{t('title')}</h1>
                        </div>
                        <p className={styles.fundamentalEdgeInsightPrimaryDescription}>
                            {t('primaryDescription.before')} <Highlight>{t('primaryDescription.highlight')}</Highlight> {t('primaryDescription.after')}
                        </p>
                    </header>
                    <footer className={styles.fundamentalEdgeInsightFooter}>
                        <div className={styles.fundamentalEdgeInsightFooterCard}>
                            <p className={styles.fundamentalEdgeInsightSecondaryDescription}>
                                {t('secondaryDescription.before')} <Highlight>{t('secondaryDescription.highlight')}</Highlight> {t('secondaryDescription.content')}
                            </p>
                        </div>
                    </footer>
                </div>
                <div className={styles.fundamentalEdgeInsightImageContainer}>
                    <Image
                        src="/images/insights/fundamental-edge.png"
                        alt={t('imageAlt')}
                        className={styles.fundamentalEdgeInsightImage}
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
        </section>
    );
}