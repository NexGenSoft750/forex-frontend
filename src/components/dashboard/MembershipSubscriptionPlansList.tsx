import { ReactNode } from "react";

type MembershipSubscriptionPlansListProps = {
    children: ReactNode;
    className?: string;
}

export default function MembershipSubscriptionPlansList({
    children,
    className
}: MembershipSubscriptionPlansListProps) {
    return (
        <>
            <div className={className}>
                {children}
            </div>
        </>
    );
}