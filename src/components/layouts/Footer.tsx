"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { useLanguage } from '../LanguageProvider';
import styles from './Footer.module.scss';

export function Footer() {
    const t = useTranslations('footer');
    const { currentLanguage } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3 className={styles.footerLogo}>Forex Fundamental Edge</h3>
                    <p className={styles.footerDescription}>
                        {t('description')}
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerTitle}>{t('quickLinks')}</h4>
                    <ul className={styles.footerLinks}>
                        <li><a href={`/${currentLanguage}`}>{t('home')}</a></li>
                        <li><a href={`/${currentLanguage}/about`}>{t('aboutUs')}</a></li>
                        <li><a href={`/${currentLanguage}`}>{t('packages')}</a></li>
                        <li><a href={`/${currentLanguage}`}>{t('forum')}</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4 className={styles.footerTitle}>{t('contact')}</h4>
                    <div className={styles.footerContact}>
                        <p>{t('email')}: support@forexfundamentaledge.com</p>
                        <p>{t('phone')}: +1 (555) 123-4567</p>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2024 Forex Fundamental Edge. {t('allRightsReserved')}</p>
            </div>
        </footer>
    );
} 