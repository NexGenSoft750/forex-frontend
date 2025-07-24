"use client";

import Link from 'next/link';
import styles from './NavBar.module.scss';
import { useTranslations } from 'next-intl';

export function NavBar() {
    const t = useTranslations('navigation');

    return (
        <nav>
            <ul className={styles.headerNavigation}>
                <li><Link href={`/`} className={styles.navLinks}>{t('home')}</Link></li>
                <li><Link href={`/about`} className={styles.navLinks}>{t('aboutUs')}</Link></li>
                <li><Link href="/packages" className={styles.navLinks}>{t('packages')}</Link></li>
                <li><Link href={`/forum`} className={styles.navLinks}>{t('forum')}</Link></li>
                <li><Link href="/dashboard" className={styles.navLinks}>Dashboard</Link></li>
            </ul>
        </nav>
    )
}   