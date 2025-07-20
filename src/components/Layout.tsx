"use client";

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import type { NextFont } from 'next/dist/compiled/@next/font';

type FontsProps = {
    inter: NextFont;
    poppins: NextFont;
}

type LayoutProps = {
    locale: string;
    fonts: FontsProps;
    children: ReactNode;
};

export default function Layout({ locale, fonts, children }: LayoutProps) {
    const pathname = usePathname();
    const [layout, setLayout] = useState<'main' | 'dashboard'>('main');

    useEffect(() => {
        if (pathname?.startsWith('/dashboard')) {
            setLayout('dashboard');
        } else {
            setLayout('main');
        }
    }, [pathname]);

    return (
        <>
            <html lang={locale} data-layout={layout}>
                <body
                    data-layout={layout}
                    className={`${fonts.inter.className} ${fonts.poppins.className}`}
                    suppressHydrationWarning>
                    {children}
                </body>
            </html>
        </>
    );
}
