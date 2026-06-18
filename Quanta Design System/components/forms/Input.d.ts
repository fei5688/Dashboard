import React from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — overrides hint and turns the field red. */
  error?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name shown inside, leading. */
  iconLeft?: string;
  /** Static text before the value (e.g. "$"). */
  prefix?: React.ReactNode;
  /** Static text after the value (e.g. "%"). */
  suffix?: React.ReactNode;
  disabled?: boolean;
}

export function Input(props: InputProps): JSX.Element;
