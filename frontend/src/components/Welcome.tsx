import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/styles/theme';
import { Heading, Text, Card, Button } from '@/components/ui';

const Welcome: React.FC = () => {
  const { t } = useTranslation();

  const containerStyle = {
    textAlign: 'center' as const,
    padding: '64px 24px',
    maxWidth: theme.spacing.layout.pageMaxWidth,
    margin: '0 auto',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    maxWidth: '800px',
    margin: '0 auto 48px auto',
  };

  const playerControlsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    flexWrap: 'wrap' as const,
  };

  const navigationCards = [
    { key: 'home', color: theme.colors.accent.blue },
    { key: 'stations', color: theme.colors.accent.green },
    { key: 'favorites', color: theme.colors.accent.yellow },
    { key: 'settings', color: theme.colors.accent.indigo },
  ];

  return (
    <div style={containerStyle}>
      <Heading level={1} style={{ marginBottom: '16px' }}>
        {t('welcome')}
      </Heading>
      <Text variant="secondary" size="large" style={{ marginBottom: '48px' }}>
        {t('hello', { name: 'Developer' })}
      </Text>
      
      <div style={gridStyle}>
        {navigationCards.map(({ key, color }) => (
          <Card key={key} padding="medium">
            <div
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: `${color}20`,
                borderRadius: theme.spacing.borderRadius.large,
                margin: '0 auto 12px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: `1px solid ${color}40`,
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  backgroundColor: color,
                  borderRadius: '50%',
                }}
              />
            </div>
            <Heading level={4} style={{ color }}>
              {t(`navigation.${key}`)}
            </Heading>
          </Card>
        ))}
      </div>

      <Card padding="large">
        <Heading level={3} style={{ marginBottom: '24px' }}>
          Player Controls
        </Heading>
        <div style={playerControlsStyle}>
          <Button variant="primary">
            {t('player.play')}
          </Button>
          <Button variant="secondary">
            {t('player.pause')}
          </Button>
          <Button variant="ghost">
            {t('player.stop')}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;