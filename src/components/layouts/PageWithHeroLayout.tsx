import { HeroSection } from '@/components/HeroSection';

type PageWithHeroLayoutProps = {
    alignItems?: 'center' | 'flex-start';
    stickyAside?: boolean;
    children: React.ReactNode;
}

export default function PageWithHeroLayout({
    alignItems = 'center',
    stickyAside = false,
    children,
}: PageWithHeroLayoutProps) {
    return (
        <>
            <HeroSection alignItems={alignItems} stickyAside={stickyAside}>
                {children}
            </HeroSection>
        </>
    );
}