import styles from './PackagesCardsLayout.module.scss';

type PackagesCardsLayoutProps = {
    children: React.ReactNode;
}

export default function PackagesCardsLayout({
    children,
}: PackagesCardsLayoutProps) {
    return (
        <>
            <div className={styles["packages-cards-layout"]}>
                {children}
            </div>
        </>
    );
}