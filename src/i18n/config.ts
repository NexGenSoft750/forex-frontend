export const defaultLocale = 'en';
export const locales = ['en', 'ru', 'zh', 'es'] as const;
export type Locale = (typeof locales)[number];

export function getLocaleFromCookie(cookieValue: string | undefined): Locale {
    if (!cookieValue) return defaultLocale;

    if (locales.includes(cookieValue as Locale)) {
        return cookieValue as Locale;
    }

    return defaultLocale;
}