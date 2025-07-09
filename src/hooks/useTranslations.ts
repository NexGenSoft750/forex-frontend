"use client";

import { useTranslations as useNextIntlTranslations } from 'next-intl';

export const useTranslations = () => {
    const t = useNextIntlTranslations();

    return {
        t: (key: string, params?: Record<string, string>) => {
            try {
                return t(key, params);
            } catch (error) {
                console.error(`Translation key not found: ${key}`);
                return key;
            }
        }
    };
}; 