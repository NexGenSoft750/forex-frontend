import { HeroSectionContentText } from './HeroSectionContentText';
import styles from './HeroSection.module.scss';
import { HeroSectionAsideNav } from './HeroSectionAsideNav';
import { HeroSectionContentSecondaryText } from './HeroSectionContentSecondaryText';

export function HeroSection() {
    return (
        <section>
            <div className={styles.heroSection}>
                <aside className={styles.heroSectionAside}>
                    <HeroSectionAsideNav />
                </aside>
                <section className={styles.heroSectionContent}>
                    <HeroSectionContentText />
                    <HeroSectionContentSecondaryText />
                </section>
            </div>
        </section>
    )
}                                           