import styles from './HeroSection.module.scss';
import { HeroSectionAsideNav } from './HeroSectionAsideNav';

type HeroSectionProps = {
    children: React.ReactNode;
}

export function HeroSection({
    children,
}: HeroSectionProps) {
    return (
        <section>
            <div className={styles.heroSection}>
                <aside className={styles.heroSectionAside}>
                    <HeroSectionAsideNav />
                </aside>
                <div className={styles.heroSectionContent}>
                    {children}
                </div>
            </div>
        </section>
    )
}                                           