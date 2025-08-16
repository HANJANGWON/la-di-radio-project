import React from 'react';
import { theme } from '@/styles/theme';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: 'online' | 'offline' | 'busy' | 'away';
  size?: 'small' | 'medium' | 'large';
  showLabel?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  size = 'medium',
  children, 
  style,
  ...props 
}) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: theme.typography.fontFamilies.primary,
    fontWeight: theme.typography.fontWeights.medium,
    borderRadius: theme.spacing.borderRadius.rounded,
    border: '1px solid transparent',
    whiteSpace: 'nowrap' as const,
    userSelect: 'none' as const,
  };

  const variantStyles = {
    default: {
      backgroundColor: theme.colors.background.card,
      color: theme.colors.text.primary,
      borderColor: theme.colors.semantic.border,
    },
    success: {
      backgroundColor: `${theme.colors.accent.green}20`,
      color: theme.colors.accent.green,
      borderColor: `${theme.colors.accent.green}40`,
    },
    warning: {
      backgroundColor: `${theme.colors.accent.yellow}20`,
      color: theme.colors.accent.yellow,
      borderColor: `${theme.colors.accent.yellow}40`,
    },
    error: {
      backgroundColor: `${theme.colors.accent.red}20`,
      color: theme.colors.accent.red,
      borderColor: `${theme.colors.accent.red}40`,
    },
    info: {
      backgroundColor: `${theme.colors.accent.blue}20`,
      color: theme.colors.accent.blue,
      borderColor: `${theme.colors.accent.blue}40`,
    },
    secondary: {
      backgroundColor: theme.colors.background.tertiary,
      color: theme.colors.text.secondary,
      borderColor: theme.colors.semantic.border,
    },
  };

  const sizeStyles = {
    small: {
      fontSize: theme.typography.fontSizes.mini,
      padding: '2px 6px',
      height: '18px',
    },
    medium: {
      fontSize: theme.typography.fontSizes.small,
      padding: '4px 8px',
      height: '22px',
    },
    large: {
      fontSize: theme.typography.fontSizes.regular,
      padding: '6px 12px',
      height: '28px',
    },
  };

  return (
    <span
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  status, 
  size = 'medium',
  showLabel = false,
  style,
  ...props 
}) => {
  const statusConfig = {
    online: {
      color: theme.colors.accent.green,
      label: 'Online',
    },
    offline: {
      color: theme.colors.text.subtle,
      label: 'Offline',
    },
    busy: {
      color: theme.colors.accent.red,
      label: 'Busy',
    },
    away: {
      color: theme.colors.accent.yellow,
      label: 'Away',
    },
  };

  const sizeConfig = {
    small: {
      width: '6px',
      height: '6px',
      fontSize: theme.typography.fontSizes.mini,
    },
    medium: {
      width: '8px',
      height: '8px',
      fontSize: theme.typography.fontSizes.small,
    },
    large: {
      width: '10px',
      height: '10px',
      fontSize: theme.typography.fontSizes.regular,
    },
  };

  const config = statusConfig[status];
  const sizeStyles = sizeConfig[size];

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          width: sizeStyles.width,
          height: sizeStyles.height,
          borderRadius: '50%',
          backgroundColor: config.color,
          boxShadow: `0 0 0 2px ${theme.colors.background.primary}`,
        }}
      />
      {showLabel && (
        <span
          style={{
            fontFamily: theme.typography.fontFamilies.primary,
            fontSize: sizeStyles.fontSize,
            fontWeight: theme.typography.fontWeights.medium,
            color: theme.colors.text.secondary,
          }}
        >
          {config.label}
        </span>
      )}
    </div>
  );
};

Badge.Status = StatusIndicator;

export default Badge;