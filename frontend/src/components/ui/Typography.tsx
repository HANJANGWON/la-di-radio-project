import React from 'react';
import { theme } from '@/styles/theme';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'primary' | 'secondary' | 'muted' | 'subtle';
  size?: 'micro' | 'mini' | 'small' | 'regular' | 'large';
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, children, style, ...props }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const headingStyles = {
    1: {
      fontSize: '64px',
      fontWeight: theme.typography.fontWeights.medium,
      lineHeight: '67.8333px',
      letterSpacing: '-1.408px',
      color: theme.colors.text.primary,
    },
    2: {
      fontSize: '56px',
      fontWeight: '538',
      lineHeight: '61.6px',
      letterSpacing: '-1.82px',
      color: theme.colors.text.primary,
    },
    3: {
      fontSize: '21px',
      fontWeight: theme.typography.fontWeights.medium,
      lineHeight: '28px',
      letterSpacing: '-0.37px',
      color: theme.colors.text.primary,
    },
    4: {
      fontSize: '14px',
      fontWeight: theme.typography.fontWeights.medium,
      lineHeight: '24px',
      letterSpacing: '-0.182px',
      color: theme.colors.text.primary,
    },
  };

  return (
    <Tag
      style={{
        fontFamily: theme.typography.fontFamilies.primary,
        margin: 0,
        ...headingStyles[level],
        ...style,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const Text: React.FC<TextProps> = ({ 
  variant = 'primary', 
  size = 'regular', 
  children, 
  style, 
  ...props 
}) => {
  const colorMap = {
    primary: theme.colors.text.primary,
    secondary: theme.colors.text.secondary,
    muted: theme.colors.text.muted,
    subtle: theme.colors.text.subtle,
  };

  const sizeMap = {
    micro: theme.typography.fontSizes.micro,
    mini: theme.typography.fontSizes.mini,
    small: theme.typography.fontSizes.small,
    regular: theme.typography.fontSizes.regular,
    large: theme.typography.fontSizes.large,
  };

  return (
    <p
      style={{
        fontFamily: theme.typography.fontFamilies.primary,
        fontSize: sizeMap[size],
        fontWeight: theme.typography.fontWeights.normal,
        lineHeight: '27.2px',
        color: colorMap[variant],
        margin: 0,
        ...style,
      }}
      {...props}
    >
      {children}
    </p>
  );
};

export interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  inline?: boolean;
}

export const Code: React.FC<CodeProps> = ({ children, inline = false, style, ...props }) => {
  const Tag = inline ? 'code' : 'pre';
  
  return (
    <Tag
      style={{
        fontFamily: theme.typography.fontFamilies.monospace,
        fontSize: theme.typography.fontSizes.small,
        color: theme.colors.text.secondary,
        background: theme.colors.background.tertiary,
        padding: inline ? '2px 6px' : '12px',
        borderRadius: theme.spacing.borderRadius.medium,
        border: `1px solid ${theme.colors.semantic.border}`,
        ...(!inline && { overflow: 'auto' }),
        ...style,
      }}
      {...props}
    >
      {inline ? children : <code>{children}</code>}
    </Tag>
  );
};