"use client";

import { useState, useEffect } from 'react';

type SubscriptionPlan = {
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

// Static data for demo
const subscriptionPlansData: SubscriptionPlan[] = [
    {
        id: 1,
        planType: 'silver',
        displayName: 'Silver',
        badgeLabel: 'SILVER',
        taxInclusivePrice: 25,
        billingCycle: 'mon',
        originalPrice: 35,
        discountedPrice: 25,
        activeDays: 30,
        bonusFreeDays: 10,
    },
    {
        id: 2,
        planType: 'gold',
        displayName: 'Gold',
        badgeLabel: 'GOLD',
        taxInclusivePrice: 85,
        billingCycle: 'mon',
        originalPrice: 85,
        discountedPrice: 60,
        activeDays: 60,
        bonusFreeDays: 20,
    },
    {
        id: 3,
        planType: 'platinum',
        displayName: 'Platinum',
        badgeLabel: 'PLATINUM',
        taxInclusivePrice: 120,
        billingCycle: 'mon',
        originalPrice: 150,
        discountedPrice: 120,
        activeDays: 90,
        bonusFreeDays: 20,
    },
];

// Simple delay function for demo
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Simple hook with loading state for demo
export function useSubscriptionPlans() {
    const [subscriptionPlans, setSubscriptionPlans] = useState<SubscriptionPlan[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            await delay(1000);
            setSubscriptionPlans(subscriptionPlansData);
            setLoading(false);
        };

        loadData();
    }, []);

    return { subscriptionPlans, loading };
} 