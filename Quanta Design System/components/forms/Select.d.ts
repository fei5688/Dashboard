import React from 'react';

export interface SelectOption { value: string; label: string; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Options as strings or {value,label} objects. */
  options?: (string | SelectOption)[];
  /** Disabled placeholder option shown when value is "". */
  placeholder?: string;
  disabled?: boolean;
}

export function Select(props: SelectProps): JSX.Element;
