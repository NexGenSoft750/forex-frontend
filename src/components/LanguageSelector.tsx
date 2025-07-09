import { useLanguage } from './LanguageProvider';
import { Dropdown } from 'react-bootstrap';
import { Locale } from '../i18n/config';
import { useTranslations } from 'next-intl';

export const LanguageSelector = () => {
    const { currentLanguage, changeLanguage } = useLanguage();
    const t = useTranslations('languages');

    const locales: Locale[] = ['en', 'ru', 'zh', 'es'];

    return (
        <Dropdown>
            <Dropdown.Toggle variant="light" id="language-dropdown">
                {t(currentLanguage)}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {locales.map((locale) => (
                    <Dropdown.Item
                        key={locale}
                        onClick={() => changeLanguage(locale)}
                        active={currentLanguage === locale}
                    >
                        {t(locale)}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}; 