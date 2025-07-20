"use client";

import MembershipSubscriptionPlanCard from './MembershipSubscriptionPlanCard';
import MembershipSubscriptionPlanCardPlaceholder from './MembershipSubscriptionPlanCardPlaceholder';
import MembershipSubscriptionPlansList from './MembershipSubscriptionPlansList';
import { useSubscriptionPlans } from './useSubscriptionPlans';
import styles from './MembershipSubscriptionPlans.module.scss';

export default function SubscriptionPlansContent() {
    const { subscriptionPlans, loading } = useSubscriptionPlans();

    if (loading) {
        return (
            <MembershipSubscriptionPlansList className={styles["membership-subscription-plans__list"]}>
                {[1, 2, 3].map((index) => (
                    <MembershipSubscriptionPlanCardPlaceholder key={index} />
                ))}
            </MembershipSubscriptionPlansList>
        );
    }

    return (
        <MembershipSubscriptionPlansList className={styles["membership-subscription-plans__list"]}>
            {subscriptionPlans?.map((subscriptionPlan) => (
                <MembershipSubscriptionPlanCard
                    key={subscriptionPlan.id}
                    {...subscriptionPlan}
                />
            ))}
        </MembershipSubscriptionPlansList>
    );
} 