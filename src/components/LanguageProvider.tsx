"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale, locales, defaultLocale, getLocale } from '../i18n/config';

interface LanguageContextType {
    currentLanguage: Locale;
    changeLanguage: (lang: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const [currentLanguage, setCurrentLanguage] = useState<Locale>(defaultLocale);

    useEffect(() => {
        if (pathname) {
            const locale = getLocale(pathname);
            setCurrentLanguage(locale);
        }
    }, [pathname]);

    const changeLanguage = (lang: Locale) => {
        setCurrentLanguage(lang);
        if (!pathname) return;

        const segments = pathname.split('/');

        if (locales.includes(segments[1] as Locale)) {
            segments[1] = lang;
        } else {
            segments.splice(1, 0, lang);
        }

        router.push(segments.join('/'));
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}; 