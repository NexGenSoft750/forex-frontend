import React from "react";
import { Card, CardContent } from "../ui/card";
import styles from "./TechnicalAnalysisSection.module.scss";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export const TechnicalAnalysisSection = () => {
    const t = useTranslations('insights.technical');

    const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <span className={styles.highlight}>{children}</span>
    );

    return (
        <section className={styles.technicalAnalysisSection}>
            <button
                className={styles.cotButton}
                aria-label={t('cotButtonAriaLabel')}
            >
                <span className={styles.cotButtonText}>
                    {t('cotButton')}
                </span>
            </button>

            <Card className={styles.technicalCard}>
                <CardContent className={styles.technicalCardContent}>
                    <div className={styles.technicalText}>
                        <p>
                            {t('description.before')} <Highlight>{t('description.highlight')}</Highlight> {t('description.content')}
                        </p>
                    </div>
                    <div className={styles.technicalChart}>
                        <Image
                            className={styles.technicalChartImg}
                            alt={t('chartAltText')}
                            src="/images/insights/cot.png"
                            width={747}
                            height={270}
                            style={{ objectFit: "cover" }}
                            priority
                        />
                    </div>
                </CardContent>
            </Card>
        </section>
    );
};
