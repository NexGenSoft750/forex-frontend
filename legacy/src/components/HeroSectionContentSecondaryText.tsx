import styles from './HeroSectionContentSecondaryText.module.scss';
import { useTranslations } from 'next-intl';
import React from 'react';

export function HeroSectionContentSecondaryText() {
    const t = useTranslations('hero');

    const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <span className={styles.heroSectionSecondaryHighlightText}>{children}</span>
    );

    return (
        <p className={styles.heroSectionContentSecondaryText}>
            {t('secondaryText.before')} <Highlight>{t('secondaryText.highlight1')}</Highlight>
            {t('secondaryText.between1')} <Highlight>{t('secondaryText.highlight2')}</Highlight>
            {t('secondaryText.between2')} <Highlight>{t('secondaryText.highlight3')}</Highlight>
            {t('secondaryText.between3')} <Highlight>{t('secondaryText.highlight4')}</Highlight>
            {t('secondaryText.after')}
        </p>
    );
}