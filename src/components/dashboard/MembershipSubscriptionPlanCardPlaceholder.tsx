import styles from './MembershipSubscriptionPlanCard.module.scss';

export default function MembershipSubscriptionPlanCardPlaceholder() {
    return (
        <div className={`${styles["subscription-plan-card"]} ${styles["placeholder"]}`}>
            <header className={styles["subscription-plan-card__header"]}>
                <div className={styles["subscription-plan-card__name-placeholder"]}></div>
                <div className={styles["subscription-plan-card__badge-placeholder"]}></div>
            </header>
            <div className={styles["subscription-plan-card__body"]}>
                <div className={styles["subscription-plan-card__tax-price-placeholder"]}></div>
                <div className={styles["subscription-plan-card__prices-placeholder"]}>
                    <div className={styles["subscription-plan-card__discounted-price-placeholder"]}></div>
                    <div className={styles["subscription-plan-card__original-price-placeholder"]}></div>
                </div>
                <div className={styles["subscription-plan-card__duration-placeholder"]}></div>
                <div className={styles["subscription-plan-card__text-box-placeholder"]}></div>
            </div>
            <footer className={styles["subscription-plan-card__footer"]}>
                <div className={styles["subscription-plan-card__subscribe-btn-placeholder"]}></div>
            </footer>
        </div>
    );
} 