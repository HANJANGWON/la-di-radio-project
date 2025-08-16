import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Language, LanguageOption } from '@/types';

const languages: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language: Language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="relative inline-block">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {t('language')}
      </label>
      <select
        value={i18n.language}
        onChange={e => handleLanguageChange(e.target.value as Language)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        {languages.map(lang => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
