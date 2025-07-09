import styles from './FundamentalHetmap.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

export function FundmentalHeatmap() {
    const t = useTranslations('insights.fundamentalHeatmap');

    const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <span className={styles.highlightedText}>{children}</span>
    );

    return (
        <section className={styles.fundamentalHetmap}>
            <div className={styles.fundamentalHetmapContainer}>
                <div className={styles.fundamentalHetmapImageContainer}>
                    <Image
                        src="/images/insights/fundamental-hetmap.png"
                        alt={t('imageAlt')}
                        className={styles.fundamentalHetmapImage}
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className={styles.fundamentalHetmapContent}>
                    <header className={styles.fundamentalHetmapHeader}>
                        <div className={styles.fundamentalHetmapHeaderTitle}>
                            <h1>{t('title')}</h1>
                        </div>
                        <p className={styles.fundamentalHetmapPrimaryDescription}>
                            {t('primaryDescription.before')} <Highlight>{t('primaryDescription.highlight')}</Highlight> {t('primaryDescription.after')}
                        </p>
                    </header>
                    <footer className={styles.fundamentalHetmapFooter}>
                        <div className={styles.fundamentalHetmapFooterCard}>
                            <p className={styles.fundamentalHetmapSecondaryDescription}>
                                {t('secondaryDescription.before')} <Highlight>{t('secondaryDescription.highlight')}</Highlight> {t('secondaryDescription.content')}
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </section>
    );
}