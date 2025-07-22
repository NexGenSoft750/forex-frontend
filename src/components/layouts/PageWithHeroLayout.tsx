import { HeroSection } from '@/components/HeroSection';

type PageWithHeroLayoutProps = {
    children: React.ReactNode;
}

export default function PageWithHeroLayout({
    children,
}: PageWithHeroLayoutProps) {
    return (
        <>
            <HeroSection>
                {children}
            </HeroSection>
        </>
    );
}