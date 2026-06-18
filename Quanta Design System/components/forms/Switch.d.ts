import React from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** @default "md" */
  size?: 'sm' | 'md';
  label?: React.ReactNode;
  disabled?: boolean;
}

export function Switch(props: SwitchProps): JSX.Element;
