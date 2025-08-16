import React from 'react';
import { theme } from '@/styles/theme';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  style,
  ...props
}) => {
  const baseStyles = {
    background: theme.colors.background.card,
    borderRadius: theme.spacing.borderRadius.large,
    border: `1px solid ${theme.colors.semantic.border}`,
    overflow: 'hidden' as const,
    position: 'relative' as const,
  };

  const variantStyles = {
    default: {
      boxShadow: theme.effects.shadows.card,
      backgroundImage: theme.effects.gradients.card,
    },
    elevated: {
      boxShadow: theme.effects.shadows.medium,
      backgroundImage: theme.effects.gradients.surface,
    },
    outlined: {
      boxShadow: 'none',
      borderColor: theme.colors.semantic.border,
    },
  };

  const paddingStyles = {
    none: { padding: '0' },
    small: { padding: '16px' },
    medium: { padding: '24px' },
    large: { padding: '32px' },
  };

  return (
    <div
      style={{
        ...baseStyles,
        ...variantStyles[variant],
        ...paddingStyles[padding],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<CardHeaderProps> = ({ children, style, ...props }) => {
  return (
    <div
      style={{
        padding: '0 0 16px 0',
        borderBottom: `1px solid ${theme.colors.semantic.border}`,
        marginBottom: '16px',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({ children, style, ...props }) => {
  return (
    <div
      style={{
        flex: 1,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardFooter: React.FC<CardFooterProps> = ({ children, style, ...props }) => {
  return (
    <div
      style={{
        padding: '16px 0 0 0',
        borderTop: `1px solid ${theme.colors.semantic.border}`,
        marginTop: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: '8px',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
