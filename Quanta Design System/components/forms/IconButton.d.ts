import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Lucide icon name. */
  icon: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** "ghost" (default, transparent) or "outline" (hairline border). */
  variant?: 'ghost' | 'outline';
  /** Toggled / selected state. */
  active?: boolean;
  /** Accessible label (required — icon-only). */
  label?: string;
  disabled?: boolean;
}

export function IconButton(props: IconButtonProps): JSX.Element;
