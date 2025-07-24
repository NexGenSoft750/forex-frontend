import { HeroSectionAsideButton } from './HeroSectionAsideButton';
import styles from './HeroSectionAsideNav.module.scss';
import { useTranslations } from 'next-intl';

export function HeroSectionAsideNav() {
    const t = useTranslations('asideNav');

    return (
        <nav>
            <ul className={styles.heroSectionAsideNav}>
                <li>
                    <HeroSectionAsideButton>{t('fundamentalHeatmap')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('currencyFundamentals')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('scoreBoard')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('cotReport')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('seasonality')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('eventsCalendar')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('retailSentiment')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('calculator')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('tradingAlerts')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('education')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('tradingJournal')}</HeroSectionAsideButton>
                </li>
                <li>
                    <HeroSectionAsideButton>{t('riskMode')}</HeroSectionAsideButton>
                </li>
            </ul>
        </nav>
    )
}