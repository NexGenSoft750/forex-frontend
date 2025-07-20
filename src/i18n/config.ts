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

export function getLocale(pathname: string): Locale {
    // Extract locale from pathname (e.g., /en/dashboard -> 'en')
    const pathSegments = pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];

    if (firstSegment && locales.includes(firstSegment as Locale)) {
        return firstSegment as Locale;
    }

    return defaultLocale;
}