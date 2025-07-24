"use client";

import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Header.module.scss';
import { NavBar } from './NavBar';
import { useLanguage } from '../../components/LanguageProvider';
import { useTranslations } from 'next-intl';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export function Header() {
    const { currentLanguage, changeLanguage } = useLanguage();
    const t = useTranslations();
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const handleCloseMenu = () => {
        setMobileMenuOpen(false);
    };

    const handleToggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <section>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    {/* Mobile Menu Toggle Button - Left side of logo */}
                    <button
                        className={`${styles.mobileMenuToggle} ${mobileMenuOpen ? styles.hidden : ''}`}
                        onClick={handleToggleMenu}
                        aria-label="Toggle mobile menu"
                    >
                        <FiMenu size={24} />
                    </button>

                    <div className={styles.headerLogo}>Logo</div>
                </div>

                <NavBar isOpen={mobileMenuOpen} closeMenu={handleCloseMenu} />

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