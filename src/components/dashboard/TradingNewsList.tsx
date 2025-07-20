import { ReactNode } from "react";

type TradingNewsListListProps = {
    children: ReactNode;
    className?: string;
}

export default function TradingNewsList({
    children,
    className
}: TradingNewsListListProps) {
    return (
        <>
            <div className={className}>
                {children}
            </div>
        </>
    );
}