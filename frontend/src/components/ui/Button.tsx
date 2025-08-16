import React from 'react';
import { theme } from '@/styles/theme';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium',
  children, 
  ...props 
}) => {


  return (
    <button 
      style={{
        fontFamily: theme.typography.fontFamilies.primary,
        fontWeight: theme.typography.fontWeights.medium,
        transition: `all ${theme.effects.transitions.regular} ease`,
        border: variant === 'ghost' ? 'none' : variant === 'primary' ? `0.666667px solid ${theme.colors.semantic.border}` : `1px solid ${theme.colors.semantic.border}`,
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        outline: 'none',
        position: 'relative',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        background: variant === 'primary' ? theme.colors.background.card : variant === 'secondary' ? theme.colors.background.secondary : 'transparent',
        color: variant === 'ghost' ? theme.colors.text.muted : theme.colors.text.primary,
        borderRadius: variant === 'primary' ? theme.spacing.borderRadius.rounded : variant === 'secondary' ? theme.spacing.borderRadius.pill : theme.spacing.borderRadius.large,
        boxShadow: variant === 'primary' ? theme.effects.shadows.glow : 'none',
        padding: size === 'small' ? '8px 12px' : size === 'medium' ? '12px 16px' : '16px 24px',
        fontSize: size === 'small' ? theme.typography.fontSizes.small : size === 'medium' ? theme.typography.fontSizes.regular : theme.typography.fontSizes.large,
        height: size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px',
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.background = 'rgb(45, 45, 49)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = 'rgb(20, 21, 22)';
          e.currentTarget.style.borderColor = 'rgb(70, 70, 76)';
        } else if (variant === 'ghost') {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
          e.currentTarget.style.color = theme.colors.text.secondary;
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.background = theme.colors.background.card;
          e.currentTarget.style.transform = 'translateY(0)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = theme.colors.background.secondary;
          e.currentTarget.style.borderColor = theme.colors.semantic.border;
        } else if (variant === 'ghost') {
          e.currentTarget.style.background = 'transparent';
          e.currentTarget.style.color = theme.colors.text.muted;
        }
      }}
      onMouseDown={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.transform = 'translateY(0)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.background = 'rgb(25, 26, 27)';
        } else if (variant === 'ghost') {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;