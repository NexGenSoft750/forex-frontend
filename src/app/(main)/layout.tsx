import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import '@/styles/globals.scss';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({
    children,
}: MainLayoutProps) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
} 