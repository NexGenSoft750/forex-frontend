import type { AppProps } from 'next/app';
import { NextIntlClientProvider } from 'next-intl';
import { LanguageProvider } from '../components/LanguageProvider';
import { usePathname } from 'next/navigation';
import { getLocale } from '../i18n/config';

// Import messages for each locale
import en from '../messages/en.json';
import ru from '../messages/ru.json';
import zh from '../messages/zh.json';
import es from '../messages/es.json';

const messages = { en, ru, zh, es };

export default function App({ Component, pageProps }: AppProps) {
    const pathname = usePathname();
    const locale = getLocale(pathname || '/');

    return (
        <NextIntlClientProvider
            messages={messages[locale]}
            locale={locale}
        >
            <LanguageProvider>
                <Component {...pageProps} />
            </LanguageProvider>
        </NextIntlClientProvider>
    );
} 