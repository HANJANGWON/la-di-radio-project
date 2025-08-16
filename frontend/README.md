# La Di Radio Project - Frontend

A modern React TypeScript application with internationalization support and Tailwind CSS styling.

## 🚀 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **react-i18next** - Internationalization support
- **ESLint** - Code linting and formatting

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository and navigate to the frontend directory
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run TypeScript type checking
npm run type-check

# Run ESLint
npm run lint
```

## 🌍 Internationalization

The app supports multiple languages using react-i18next:

- **English (en)** - Default language
- **Korean (ko)** - Secondary language

### Adding New Languages

1. Create a new translation file in `public/locales/{language-code}/translation.json`
2. Add the language option to `src/components/LanguageSwitcher.tsx`
3. Update the `src/types/index.ts` Language type

### Adding New Translations

Add new translation keys to the JSON files in `public/locales/*/translation.json` and use them in components with the `useTranslation` hook:

```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  return <p>{t('my.translation.key')}</p>;
}
```

## 🎨 Styling

This project uses Tailwind CSS for styling:

- Dark mode support with `dark:` prefixes
- Responsive design with breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Custom configuration in `tailwind.config.js`

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── services/           # API services and external integrations
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
├── i18n/               # Internationalization configuration
├── styles/             # Additional stylesheets
├── App.tsx             # Main application component
└── main.tsx            # Application entry point

public/
└── locales/           # Translation files
    ├── en/
    │   └── translation.json
    └── ko/
        └── translation.json
```

## 🔧 Configuration

### Path Aliases

The project includes path aliases for cleaner imports:

```tsx
import Component from '@/components/Component';
import { useCustomHook } from '@/hooks/useCustomHook';
import type { MyType } from '@/types';
```

### TypeScript

- Strict mode enabled
- Path mapping configured
- Custom types in `src/types/`

### Tailwind CSS

- PostCSS integration
- Custom configuration
- Dark mode support
- Responsive design utilities

## 🌐 Environment Variables

Copy `.env.example` to `.env` and configure:

- `VITE_API_BASE_URL` - Backend API URL
- `VITE_FEATURE_*` - Feature flags
- `VITE_DEFAULT_VOLUME` - Default audio volume
- Other configuration options

## 📱 Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Mode** - Automatic theme switching
- **Internationalization** - Multi-language support
- **Type Safety** - Full TypeScript integration
- **Modern Tooling** - Vite, ESLint, and modern React patterns

## 🚀 Deployment

Build the application for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🧪 Testing

(Testing setup to be added in future iterations)

## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for all new components
3. Add translations for new user-facing text
4. Test your changes in both light and dark modes
5. Ensure responsive design works on all screen sizes

## 📄 License

[License information to be added]
