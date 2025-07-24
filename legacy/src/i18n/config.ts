export const defaultLocale = 'en';
export const locales = ['en', 'ru', 'zh', 'es'] as const;
export type Locale = (typeof locales)[number];

export function getLocale(pathname: string | null): Locale {
    if (!pathname) return defaultLocale;
    const segments = pathname.split('/');
    const locale = segments[1] as Locale;

    if (locales.includes(locale)) {
        return locale;
    }

    return defaultLocale;
} 