"use client";

import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Header.module.scss';
import { NavBar } from './NavBar';
import { useLanguage } from '../../components/LanguageProvider';
import { useTranslations } from 'next-intl';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi'; // Import Menu and X icons
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export function Header() {
    const { currentLanguage, changeLanguage } = useLanguage();
    const t = useTranslations();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    const languages = [
        {
            name: 'English',
            code: 'en',
            flag: 'https://flagcdn.com/us.svg'
        },
        {
            name: 'Русский',
            code: 'ru',
            flag: 'https://flagcdn.com/ru.svg'
        },
        {
            name: '中文',
            code: 'zh',
            flag: 'https://flagcdn.com/cn.svg'
        },
        {
            name: 'Español',
            code: 'es',
            flag: 'https://flagcdn.com/es.svg'
        }
    ];

    const handleLanguageChange = (code: string) => {
        changeLanguage(code as 'en' | 'ru' | 'zh' | 'es');
    };

    const handleSwitchToRegister = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    const handleSwitchToLogin = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
    };

    return (
        <section>
            <header className={styles.header}>
                {/* Hamburger Menu Toggle Button */}
                <button
                    className={styles.menuToggle}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
                </button>

                <div className={styles.headerLogo}>Logo</div>

                {/* Pass state and closer function to NavBar */}
                <NavBar isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />

                <div className={styles.headerActions}>
                    <Dropdown className={styles.languageDropdown}>
                        <Dropdown.Toggle>
                            <span className={styles.languageDropdownTitle}>
                                <img
                                    src={languages.find(lang => lang.code === currentLanguage)?.flag}
                                    alt=""
                                    className={styles.languageDropdownFlag}
                                />
                                {languages.find(lang => lang.code === currentLanguage)?.name}
                                <FiChevronDown size={18} color="#fff" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {languages.map((language) => (
                                <Dropdown.Item
                                    key={language.code}
                                    onClick={() => handleLanguageChange(language.code)}
                                    active={currentLanguage === language.code}
                                >
                                    <span className={styles.languageDropdownItemTitle}>
                                        <img
                                            src={language.flag}
                                            alt=""
                                            className={styles.languageDropdownItemFlag}
                                        />
                                        {language.name}
                                    </span>
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <div>
                        <button
                            className={styles.loginBtn}
                            onClick={() => setShowLoginModal(true)}
                        >
                            {t('auth.login')}
                        </button>
                    </div>

                    <LoginModal
                        show={showLoginModal}
                        onHide={() => setShowLoginModal(false)}
                        onSwitchToRegister={handleSwitchToRegister}
                    />

                    <RegisterModal
                        show={showRegisterModal}
                        onHide={() => setShowRegisterModal(false)}
                        onSwitchToLogin={handleSwitchToLogin}
                    />
                </div>
            </header>
        </section>
    );
}