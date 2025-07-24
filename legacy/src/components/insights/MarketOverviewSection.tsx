import React from "react";
import { Card, CardContent } from "../ui/card";
import styles from "./MarketOverviewSection.module.scss";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export const MarketOverviewSection = () => {
    const t = useTranslations('insights.market');

    const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <span className={styles.highlight}>{children}</span>
    );

    return (
        <section className={styles.marketOverviewSection}>
            <div className={styles.seasonalityHeader}>
                <h2 className={styles.seasonalityHeaderTitle}>{t('title')}</h2>
            </div>

            <Card className={styles.seasonalityCard}>
                <CardContent className={styles.seasonalityCardContent}>
                    <p>
                        {t('description.before')} <Highlight>{t('description.highlight')}</Highlight> {t('description.content')}
                    </p>
                </CardContent>
                <div className={styles.seasonalityChartImgContainer}>
                    <div className={styles.seasonalityChartImgOuterLayer}>
                        <Image
                            alt={t('chartAltText')}
                            src="/images/insights/seasonality.png"
                            fill
                            style={{ objectFit: "contain" }}
                            sizes="(max-width: 900px) 100vw, 60vw"
                            priority
                        />
                    </div>
                </div>
            </Card>
        </section>
    );
};
