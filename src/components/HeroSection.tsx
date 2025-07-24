import styles from './HeroSection.module.scss';
import { HeroSectionAsideNav } from './HeroSectionAsideNav';

type HeroSectionProps = {
    alignItems?: 'center' | 'flex-start';
    stickyAside?: boolean;
    children: React.ReactNode;
}

export function HeroSection({
    alignItems = 'center',
    stickyAside = false,
    children,
}: HeroSectionProps) {
    return (
        <section>
            <div className={styles.heroSection} style={{ alignItems: alignItems }}>
                <aside className={`${styles.heroSectionAside} ${stickyAside ? styles.heroSectionAsideSticky : ''}`}>
                    <HeroSectionAsideNav />
                </aside>
                <div className={styles.heroSectionContent}>
                    {children}
                </div>
            </div>
        </section>
    )
}                                           