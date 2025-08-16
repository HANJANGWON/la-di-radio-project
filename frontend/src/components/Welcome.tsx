import React from 'react';
import { useTranslation } from 'react-i18next';

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t('welcome')}
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        {t('hello', { name: 'Developer' })}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100">
            {t('navigation.home')}
          </h3>
        </div>
        <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg">
          <h3 className="font-semibold text-green-900 dark:text-green-100">
            {t('navigation.stations')}
          </h3>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-900 dark:text-yellow-100">
            {t('navigation.favorites')}
          </h3>
        </div>
        <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg">
          <h3 className="font-semibold text-purple-900 dark:text-purple-100">
            {t('navigation.settings')}
          </h3>
        </div>
      </div>
      <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Player Controls
        </h3>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            {t('player.play')}
          </button>
          <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">
            {t('player.pause')}
          </button>
          <button className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors">
            {t('player.stop')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;