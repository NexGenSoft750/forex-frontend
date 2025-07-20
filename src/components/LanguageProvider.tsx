"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale, defaultLocale, getLocaleFromCookie } from '../i18n/config';

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
    const [currentLanguage, setCurrentLanguage] = useState<Locale>(defaultLocale);
    const [key, setKey] = useState(0); // Force re-render key

    useEffect(() => {
        // Get locale from cookie on client side
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
            return undefined;
        };

        const cookieLocale = getCookie('locale');
        const locale = getLocaleFromCookie(cookieLocale);
        setCurrentLanguage(locale);
    }, []);

    const changeLanguage = (lang: Locale) => {
        setCurrentLanguage(lang);

        // Set cookie
        document.cookie = `locale=${lang}; path=/; max-age=${60 * 60 * 24 * 365}`;

        // Force re-render by updating the key
        setKey(prev => prev + 1);
    };

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
            <div key={key}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}; 