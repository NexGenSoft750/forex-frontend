import React from 'react';
import styles from './FundamentalAnalysisSection.module.scss';
import { useTranslations } from 'next-intl';

export function FundamentalAnalysisSection() {
    const t = useTranslations('fundamentalAnalysis.menuItems');

    const renderSplitText = (text: string) => {
        const words = text.split(' ');
        return (
            <>
                {words.map((word, i) => (
                    <React.Fragment key={i}>
                        {word}
                        {i < words.length - 1 && <br />}
                    </React.Fragment>
                ))}
            </>
        );
    };

    const menuItems = [
        {
            id: 'fundamental-bias',
            label: (
                <div className={styles.fundamentalBias}>
                    {renderSplitText(t('fundamentalBias'))}
                </div>
            ),
        },
        {
            id: 'score-board',
            label: (
                <div className={styles.scoreBoardWrapper}>
                    <div className={styles.scoreBoardMain}>{t('scoreBoard')}</div>
                    <div className={styles.scoreBoardGradient}>{t('scoreBoard')}</div>
                </div>
            ),
        },
        {
            id: 'cot-report',
            label: (
                <div className={styles.cotReport}>{t('cotReport')}</div>
            ),
        },
        {
            id: 'seasonality',
            label: (
                <div className={styles.seasonalityWrapper}>
                    <div className={styles.seasonalityBlur}>{t('seasonality')}</div>
                    <div className={styles.seasonalityMain}>{t('seasonality')}</div>
                </div>
            ),
        },
        {
            id: 'retail-sentiment',
            label: (
                <div className={styles.retailSentiment}>
                    {renderSplitText(t('retailSentiment'))}
                </div>
            ),
        },
        {
            id: 'risk-mode',
            label: (
                <div className={styles.riskMode}>{t('riskMode')}</div>
            ),
        },
        {
            id: 'education',
            label: (
                <div className={styles.education}>{t('education')}</div>
            ),
        },
    ];

    return (
        <nav className={styles.fundamentalAnalysisNav}>
            <div className={styles.menuRow}>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className={styles.menuButton}
                        aria-label={item.id.replace(/-/g, ' ')}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
