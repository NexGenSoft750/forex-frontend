import Link from 'next/link';
import styles from './NavBar.module.scss';
import { useTranslations } from 'next-intl';
import { FiX } from 'react-icons/fi';

// Define props for the component
interface NavBarProps {
    isOpen: boolean;
    closeMenu: () => void;
}

export function NavBar({ isOpen, closeMenu }: NavBarProps) {
    const t = useTranslations('navigation');

    return (
        <>
            {/* Overlay */}
            {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

            {/* Original Nav for Desktop */}
            <nav className={styles.desktopNav}>
                <ul className={styles.headerNavigation}>
                    <li><Link href="/" className={styles.navLinks}>{t('home')}</Link></li>
                    <li><Link href="/" className={styles.navLinks}>{t('aboutUs')}</Link></li>
                    <li><Link href="/" className={styles.navLinks}>{t('packages')}</Link></li>
                    <li><Link href="/" className={styles.navLinks}>{t('forum')}</Link></li>
                </ul>
            </nav>

            {/* Sidebar for Mobile/Tablet */}
            <div className={`${styles.mobileNav} ${isOpen ? styles.isOpen : ''}`}>
                <div className={styles.mobileNavHeader}>
                    <span>Logo</span>
                    <button onClick={closeMenu} className={styles.closeButton} aria-label="Close menu">
                        <FiX size={30} />
                    </button>
                </div>
                <nav>
                    <ul className={styles.mobileNavLinks}>
                        <li><Link href="/" className={styles.navLinks} onClick={closeMenu}>{t('home')}</Link></li>
                        <li><Link href="/" className={styles.navLinks} onClick={closeMenu}>{t('aboutUs')}</Link></li>
                        <li><Link href="/" className={styles.navLinks} onClick={closeMenu}>{t('packages')}</Link></li>
                        <li><Link href="/" className={styles.navLinks} onClick={closeMenu}>{t('forum')}</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}   