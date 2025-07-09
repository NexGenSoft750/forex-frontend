import styles from "./CurrencyStrengthMeter.module.scss";
import Image from "next/image";
import { useTranslations } from '@/hooks/useTranslations';

export function CurrencyStrengthMeter() {
    const { t } = useTranslations();

    return (
        <>
            <section className={styles.currencyStrengthMeterSection}>
                <main>
                    <div className={styles.currencyStrengthMeterContainer}>
                        <div className={styles.currencyStrengthMeterCard}>
                            <div className={styles.currencyStrengthMeterCardContent}>
                                <header className={styles.currencyStrengthMeterSectionHeader}>
                                    <div className={styles.currencyStrengthMeterSectionTitle}>
                                        <h1>{t('insights.currencyStrengthMeter.title')} <span className={styles.highlightedText}>{t('insights.currencyStrengthMeter.titleHighlight')}</span></h1>
                                    </div>
                                </header>
                                <p className={styles.currencyStrengthMeterCardDescription}>
                                    {t('insights.currencyStrengthMeter.description.before')} <span className={styles.highlightedText}>{t('insights.currencyStrengthMeter.description.highlight')}</span>, {t('insights.currencyStrengthMeter.description.content')}
                                </p>
                            </div>
                            <div className={styles.currencyStrengthMeterCardImageWrapper}>
                                <Image
                                    src="/images/insights/currency-strength-meter.png"
                                    alt={t('insights.currencyStrengthMeter.imageAlt')}
                                    className={styles.currencyStrengthMeterCardImage}
                                    width={1000}
                                    height={1000}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};