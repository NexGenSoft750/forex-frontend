import Link from 'next/link';
import styles from './NavBar.module.scss';
import { useTranslations } from 'next-intl';
import { useLanguage } from '../LanguageProvider';

export function NavBar() {
    const t = useTranslations('navigation');
    const { currentLanguage } = useLanguage();

    return (
        <nav>
            <ul className={styles.headerNavigation}>
                <li><Link href="/" className={styles.navLinks}>{t('home')}</Link></li>
                <li><Link href="/about" className={styles.navLinks}>{t('aboutUs')}</Link></li>
                <li><Link href="/" className={styles.navLinks}>{t('packages')}</Link></li>
                <li><Link href="/" className={styles.navLinks}>{t('forum')}</Link></li>
            </ul>
        </nav>
    )
}   