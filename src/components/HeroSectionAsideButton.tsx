'use client';

import styles from './HeroSectionAsideButton.module.scss';

export function HeroSectionAsideButton({ children }: { children: React.ReactNode }) {
    return (
        <button className={styles.heroSectionAsideButton}>
            <span className={styles.heroSectionAsideButtonText}>{children}</span>
        </button>
    )
}                   