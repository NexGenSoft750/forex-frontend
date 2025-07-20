import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, Locale } from './i18n/config';

export function middleware(request: NextRequest) {
    // Get locale from cookie or default
    const locale = request.cookies.get('locale')?.value || defaultLocale;

    // Validate locale
    const validLocale = locales.includes(locale as Locale) ? locale : defaultLocale;

    // Set locale in cookie if not present or invalid
    const response = NextResponse.next();

    if (!request.cookies.get('locale') || !locales.includes(locale as Locale)) {
        response.cookies.set('locale', validLocale, {
            path: '/',
            maxAge: 60 * 60 * 24 * 365, // 1 year
        });
    }

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ],
};