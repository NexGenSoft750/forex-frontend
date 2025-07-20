import styles from './MembershipSubscriptionPlanCard.module.scss';

type SubscriptionPlanCardProps = {
    id: number;
    planType: string;
    displayName: string;
    badgeLabel: string;
    taxInclusivePrice: number;
    billingCycle: string;
    originalPrice: number;
    discountedPrice: number;
    activeDays: number;
    bonusFreeDays: number;
}

export default function MembershipSubscriptionPlanCard(
    subscriptionPlan: SubscriptionPlanCardProps
) {
    return (
        <>
            <div className={`${styles["subscription-plan-card"]} ${styles[subscriptionPlan.planType]}`}>
                <header className={styles["subscription-plan-card__header"]}>
                    <h1 className={styles["subscription-plan-card__name"]}>{subscriptionPlan.displayName} Membership</h1>
                    <span className={styles["subscription-plan-card__badge"]}>{subscriptionPlan.badgeLabel}</span>
                </header>
                <div className={styles["subscription-plan-card__body"]}>
                    <span className={styles["subscription-plan-card__tax-price"]}>Tax Included: USD {subscriptionPlan.taxInclusivePrice}</span>
                    <div className={styles["subscription-plan-card__prices"]}>
                        <span className={styles["subscription-plan-card__discounted-price"]}>
                            USD {subscriptionPlan.discountedPrice}
                            <span className={styles["subscription-plan-card__price-period"]}>/{subscriptionPlan.billingCycle}</span>
                            <span className={styles["subscription-plan-card__original-price"]}>USD {subscriptionPlan.originalPrice}</span>
                        </span>
                    </div>
                    <span className={styles["subscription-plan-card__duration"]}>Duration: {subscriptionPlan.activeDays} Days + {subscriptionPlan.bonusFreeDays} Days (Free)</span>
                    <textarea
                        placeholder='Text Here'
                        name=""
                        id=""
                        rows={3}
                        className={styles["subscription-plan-card__text-box"]}
                    >
                    </textarea>
                </div>
                <footer className={styles["subscription-plan-card__footer"]}>
                    <button className={styles["subscription-plan-card__subscribe-btn"]}>SUBSCRIBE</button>
                </footer>
            </div>
        </>
    );
}