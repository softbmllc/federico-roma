// src/components/ui/Button.tsx

import React from 'react';
import { useTranslation } from 'react-i18next';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  labelKey?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  labelKey,
}) => {
  const { t } = useTranslation();

  const baseStyles =
    'inline-flex items-center justify-center min-w-[220px] px-8 py-4 text-lg font-sans font-bold rounded-md tracking-wide uppercase transition-all duration-300 hover:scale-105 shadow-md';

  const variants = {
    primary: 'bg-yellow-400 text-black border border-black hover:bg-yellow-300',
    secondary: 'bg-white text-black border border-black hover:bg-gray-200',
  };

  if (import.meta.env.DEV && labelKey && children) {
    console.warn('Button component received both labelKey and children. labelKey will be used.');
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {labelKey ? t(labelKey) : children}
    </button>
  );
};

export default Button;