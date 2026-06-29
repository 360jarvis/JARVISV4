import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  disabled?: boolean;
};

const variantStyles: Record<ButtonVariant, Record<string, string | number>> = {
  primary: {
    background: 'var(--jarvixx-gold)',
    color: 'var(--jarvixx-ink)',
    border: '1px solid var(--jarvixx-gold)'
  },
  secondary: {
    background: '#fff',
    color: 'var(--jarvixx-ink)',
    border: '1px solid var(--jarvixx-border)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--jarvixx-muted)',
    border: '1px solid transparent'
  }
};

export default function Button({ children, href, type = 'button', variant = 'primary', disabled = false }: ButtonProps) {
  const style = {
    minHeight: 42,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '0 16px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.58 : 1,
    boxShadow: variant === 'primary' ? '0 12px 30px rgba(216,189,127,0.24)' : 'none',
    ...variantStyles[variant]
  };

  if (href) {
    return <a href={href} style={style}>{children}</a>;
  }

  return <button type={type} disabled={disabled} style={style}>{children}</button>;
}
