import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './config';

export default getRequestConfig(async ({ locale }) => {
    const resolvedLocale = locale || defaultLocale;

    if (!locales.includes(resolvedLocale as Locale)) {
        throw new Error(`Locale '${resolvedLocale}' is not supported`);
    }

    return {
        locale: resolvedLocale,
        messages: (await import(`../messages/${resolvedLocale}.json`)).default,
        timeZone: 'UTC'
    };
}); 