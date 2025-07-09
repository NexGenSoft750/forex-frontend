import { NextIntlClientProvider } from 'next-intl';
import { LanguageProvider } from '../../components/LanguageProvider';
import { Inter } from "next/font/google";
import '../../styles/globals.scss';
import type { Metadata } from 'next';

import en from '../../messages/en.json';
import ru from '../../messages/ru.json';
import zh from '../../messages/zh.json';
import es from '../../messages/es.json';

const messages = { en, ru, zh, es };
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Forex Trading Platform",
    description: "Advanced forex trading platform with real-time market data and professional tools",
    keywords: "forex, trading, currency, market, investment",
    authors: [{ name: "Forex Trading Team" }],
    robots: "index, follow"
};

type Locale = 'en' | 'ru' | 'zh' | 'es';

interface RootLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({
    children,
    params
}: RootLayoutProps) {
    const { locale } = await params;

    return (
        <html lang={locale}>
            <body className={inter.className} suppressHydrationWarning>
                <NextIntlClientProvider messages={messages[locale]} locale={locale}>
                    <LanguageProvider>
                        {children}
                    </LanguageProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
} 