import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Welcome from '@/components/Welcome';

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <header className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Radio App
              </h1>
            </div>
            <LanguageSwitcher />
          </header>
          
          <main>
            <Welcome />
          </main>
          
          <footer className="mt-16 py-8 text-center text-gray-600 dark:text-gray-400">
            <p>Built with React + TypeScript + Tailwind CSS + i18next</p>
          </footer>
        </div>
      </div>
    </I18nextProvider>
  );
};

export default App;