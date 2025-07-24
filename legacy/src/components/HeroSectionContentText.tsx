import styles from './HeroSectionContentText.module.scss';
import { useTranslations } from 'next-intl';

export function HeroSectionContentText() {
    const t = useTranslations('welcome');

    return (
        <p className={styles.heroSectionContentText}>
            <span className={`${styles.heroSectionText} ${styles.heroSectionLargeLightText}`}>{t('title')}</span>
            <br />
            <span className={`${styles.heroSectionText} ${styles.heroSectionLargeDarkText}`}>{t('brandName')}</span>
            <br />
            <span className={`${styles.heroSectionText} ${styles.heroSectionLargeLightText}`}>{t('gateway')}</span>
            <br />
            <span className={`${styles.heroSectionText} ${styles.heroSectionLargeDarkText}`}>{t('smartTrading')}</span>
        </p>
    );
}