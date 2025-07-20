import styles from './MembershipSubscriptionPlans.module.scss';
import SubscriptionPlansContent from './SubscriptionPlansContent';

export default function MembershipSubscriptionPlans() {
    return (
        <>
            <section className={styles["membership-subscription-plans"]}>
                <h1 className={styles["membership-subscription-plans__heading"]}>Membership Subscription Plans</h1>
                <SubscriptionPlansContent />
            </section>
        </>
    );
}