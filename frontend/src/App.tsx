import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { theme } from '@/styles/theme';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Welcome from '@/components/Welcome';
import ComponentsPage from '@/pages/Components';

const App: React.FC = () => {
  const appStyle = {
    minHeight: '100vh',
    background: theme.colors.background.primary,
    fontFamily: theme.typography.fontFamilies.primary,
    color: theme.colors.text.primary,
  };

  const headerStyle = {
    background: theme.colors.background.header,
    backdropFilter: 'blur(20px)',
    borderBottom: `1px solid ${theme.colors.semantic.border}`,
    height: theme.spacing.layout.headerHeight,
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  };

  const headerContentStyle = {
    maxWidth: theme.spacing.layout.maxWidth,
    margin: '0 auto',
    padding: theme.spacing.padding.container,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  };

  const linkStyle = {
    color: theme.colors.text.secondary,
    textDecoration: 'none',
    fontSize: theme.typography.fontSizes.regular,
    fontWeight: theme.typography.fontWeights.medium,
    transition: `color ${theme.effects.transitions.regular} ease`,
  };


  const mainStyle = {
    flex: 1,
  };

  const footerStyle = {
    padding: '32px 24px',
    textAlign: 'center' as const,
    color: theme.colors.text.muted,
    borderTop: `1px solid ${theme.colors.semantic.border}`,
    fontSize: theme.typography.fontSizes.small,
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div style={appStyle}>
          <header style={headerStyle}>
            <div style={headerContentStyle}>
              <div style={navStyle}>
                <Link 
                  to="/" 
                  style={{
                    ...linkStyle,
                    fontSize: theme.typography.fontSizes.large,
                    fontWeight: theme.typography.fontWeights.semibold,
                    color: theme.colors.text.primary,
                  }}
                >
                  Radio App
                </Link>
                <Link 
                  to="/" 
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = theme.colors.text.primary}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = theme.colors.text.secondary}
                >
                  Home
                </Link>
                <Link 
                  to="/components" 
                  style={linkStyle}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = theme.colors.text.primary}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = theme.colors.text.secondary}
                >
                  Components
                </Link>
              </div>
              <LanguageSwitcher />
            </div>
          </header>
          
          <main style={mainStyle}>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/components" element={<ComponentsPage />} />
            </Routes>
          </main>
          
          <footer style={footerStyle}>
            <p>Built with React + TypeScript + Linear Design System</p>
          </footer>
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;