"use client";

import PageWithHeroLayout from "@/components/layouts/PageWithHeroLayout";
import PackagesCard from "@/components/packages/PackagesCard";
import PackagesCardsLayout from "@/components/packages/PackagesCardsLayout";

export default function Packages() {
    const packagesCards = [
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

    return (
        <>
            <PageWithHeroLayout>
                <PackagesCardsLayout>
                    {
                        packagesCards?.map((packagesCard) => (
                            <PackagesCard
                                key={packagesCard.id}
                                {...packagesCard}
                            />
                        ))
                    }
                </PackagesCardsLayout>
            </PageWithHeroLayout>
        </>
    );
}