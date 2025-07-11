"use client";

import { Header } from '../../../components/layouts/Header';
import { Footer } from '../../../components/layouts/Footer';
import { useTranslations } from 'next-intl';
import styles from './about.module.scss';

export default function About() {
    const t = useTranslations('about');

    return (
        <>
            <Header />
            <main className={styles.aboutMain}>
                <section className={styles.aboutHero}>
                    <div className={styles.aboutHeroContent}>
                        <h1 className={styles.aboutTitle}>{t('title')}</h1>
                        <p className={styles.aboutSubtitle}>{t('subtitle')}</p>
                    </div>
                </section>

                <section className={styles.aboutContent}>
                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>{t('ourMission.title')}</h2>
                        <p className={styles.sectionText}>
                            {t('ourMission.description')}
                        </p>
                    </div>

                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>{t('whatWeDo.title')}</h2>
                        <p className={styles.sectionText}>
                            {t('whatWeDo.description')}
                        </p>
                        <ul className={styles.featureList}>
                            <li>{t('whatWeDo.features.fundamentalAnalysis')}</li>
                            <li>{t('whatWeDo.features.technicalIndicators')}</li>
                            <li>{t('whatWeDo.features.marketInsights')}</li>
                            <li>{t('whatWeDo.features.educationalResources')}</li>
                        </ul>
                    </div>

                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>{t('whyChooseUs.title')}</h2>
                        <div className={styles.advantagesGrid}>
                            <div className={styles.advantageCard}>
                                <h3 className={styles.advantageTitle}>{t('whyChooseUs.advantages.expertise.title')}</h3>
                                <p className={styles.advantageText}>{t('whyChooseUs.advantages.expertise.description')}</p>
                            </div>
                            <div className={styles.advantageCard}>
                                <h3 className={styles.advantageTitle}>{t('whyChooseUs.advantages.realTime.title')}</h3>
                                <p className={styles.advantageText}>{t('whyChooseUs.advantages.realTime.description')}</p>
                            </div>
                            <div className={styles.advantageCard}>
                                <h3 className={styles.advantageTitle}>{t('whyChooseUs.advantages.comprehensive.title')}</h3>
                                <p className={styles.advantageText}>{t('whyChooseUs.advantages.comprehensive.description')}</p>
                            </div>
                            <div className={styles.advantageCard}>
                                <h3 className={styles.advantageTitle}>{t('whyChooseUs.advantages.support.title')}</h3>
                                <p className={styles.advantageText}>{t('whyChooseUs.advantages.support.description')}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.aboutSection}>
                        <h2 className={styles.sectionTitle}>{t('ourTeam.title')}</h2>
                        <p className={styles.sectionText}>
                            {t('ourTeam.description')}
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
} 