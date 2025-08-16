import React from 'react';
import { theme } from '@/styles/theme';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const inputStyles = {
    fontFamily: theme.typography.fontFamilies.primary,
    fontSize: theme.typography.fontSizes.regular,
    fontWeight: theme.typography.fontWeights.normal,
    color: theme.colors.text.primary,
    background: theme.colors.background.secondary,
    border: `1px solid ${error ? theme.colors.accent.red : theme.colors.semantic.border}`,
    borderRadius: theme.spacing.borderRadius.large,
    padding: leftIcon || rightIcon ? '12px 16px 12px 40px' : '12px 16px',
    height: '40px',
    width: '100%',
    outline: 'none',
    transition: `all ${theme.effects.transitions.regular} ease`,
  };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: theme.typography.fontSizes.small,
            fontWeight: theme.typography.fontWeights.medium,
            color: theme.colors.text.secondary,
            marginBottom: '6px',
            fontFamily: theme.typography.fontFamilies.primary,
          }}
        >
          {label}
        </label>
      )}

      <div style={{ position: 'relative' }}>
        {leftIcon && (
          <div
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.colors.text.muted,
              pointerEvents: 'none',
            }}
          >
            {leftIcon}
          </div>
        )}

        <input
          style={{
            ...inputStyles,
            paddingLeft: leftIcon ? '40px' : '16px',
            paddingRight: rightIcon ? '40px' : '16px',
            ...style,
          }}
          onFocus={e => {
            e.target.style.borderColor = theme.colors.semantic.focus;
            e.target.style.boxShadow = `0 0 0 2px ${theme.colors.semantic.focus}20`;
          }}
          onBlur={e => {
            e.target.style.borderColor = error
              ? theme.colors.accent.red
              : theme.colors.semantic.border;
            e.target.style.boxShadow = 'none';
          }}
          {...props}
        />

        {rightIcon && (
          <div
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: theme.colors.text.muted,
              pointerEvents: 'none',
            }}
          >
            {rightIcon}
          </div>
        )}
      </div>

      {(error || hint) && (
        <p
          style={{
            fontSize: theme.typography.fontSizes.small,
            color: error ? theme.colors.accent.red : theme.colors.text.muted,
            marginTop: '4px',
            marginBottom: '0',
            fontFamily: theme.typography.fontFamilies.primary,
          }}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

export const Textarea: React.FC<TextareaProps> = ({ label, error, hint, style, ...props }) => {
  const textareaStyles = {
    fontFamily: theme.typography.fontFamilies.primary,
    fontSize: theme.typography.fontSizes.regular,
    fontWeight: theme.typography.fontWeights.normal,
    color: theme.colors.text.primary,
    background: theme.colors.background.secondary,
    border: `1px solid ${error ? theme.colors.accent.red : theme.colors.semantic.border}`,
    borderRadius: theme.spacing.borderRadius.large,
    padding: '12px 16px',
    width: '100%',
    minHeight: '80px',
    outline: 'none',
    transition: `all ${theme.effects.transitions.regular} ease`,
    resize: 'vertical' as const,
  };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: theme.typography.fontSizes.small,
            fontWeight: theme.typography.fontWeights.medium,
            color: theme.colors.text.secondary,
            marginBottom: '6px',
            fontFamily: theme.typography.fontFamilies.primary,
          }}
        >
          {label}
        </label>
      )}

      <textarea
        style={{
          ...textareaStyles,
          ...style,
        }}
        onFocus={e => {
          e.target.style.borderColor = theme.colors.semantic.focus;
          e.target.style.boxShadow = `0 0 0 2px ${theme.colors.semantic.focus}20`;
        }}
        onBlur={e => {
          e.target.style.borderColor = error
            ? theme.colors.accent.red
            : theme.colors.semantic.border;
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      />

      {(error || hint) && (
        <p
          style={{
            fontSize: theme.typography.fontSizes.small,
            color: error ? theme.colors.accent.red : theme.colors.text.muted,
            marginTop: '4px',
            marginBottom: '0',
            fontFamily: theme.typography.fontFamilies.primary,
          }}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  hint,
  children,
  style,
  ...props
}) => {
  const selectStyles = {
    fontFamily: theme.typography.fontFamilies.primary,
    fontSize: theme.typography.fontSizes.regular,
    fontWeight: theme.typography.fontWeights.normal,
    color: theme.colors.text.primary,
    background: theme.colors.background.secondary,
    border: `1px solid ${error ? theme.colors.accent.red : theme.colors.semantic.border}`,
    borderRadius: theme.spacing.borderRadius.large,
    padding: '12px 16px',
    height: '40px',
    width: '100%',
    outline: 'none',
    transition: `all ${theme.effects.transitions.regular} ease`,
    cursor: 'pointer',
  };

  return (
    <div style={{ width: '100%' }}>
      {label && (
        <label
          style={{
            display: 'block',
            fontSize: theme.typography.fontSizes.small,
            fontWeight: theme.typography.fontWeights.medium,
            color: theme.colors.text.secondary,
            marginBottom: '6px',
            fontFamily: theme.typography.fontFamilies.primary,
          }}
        >
          {label}
        </label>
      )}

      <select
        style={{
          ...selectStyles,
          ...style,
        }}
        onFocus={e => {
          e.target.style.borderColor = theme.colors.semantic.focus;
          e.target.style.boxShadow = `0 0 0 2px ${theme.colors.semantic.focus}20`;
        }}
        onBlur={e => {
          e.target.style.borderColor = error
            ? theme.colors.accent.red
            : theme.colors.semantic.border;
          e.target.style.boxShadow = 'none';
        }}
        {...props}
      >
        {children}
      </select>

      {(error || hint) && (
        <p
          style={{
            fontSize: theme.typography.fontSizes.small,
            color: error ? theme.colors.accent.red : theme.colors.text.muted,
            marginTop: '4px',
            marginBottom: '0',
            fontFamily: theme.typography.fontFamilies.primary,
          }}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
};

Input.Textarea = Textarea;
Input.Select = Select;

export default Input;
