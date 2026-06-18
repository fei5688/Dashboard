import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional header title. */
  title?: React.ReactNode;
  /** Sub-label under the title. */
  subtitle?: React.ReactNode;
  /** Header-right node (buttons, menu). */
  actions?: React.ReactNode;
  /** Inner padding. @default "md" */
  padding?: 'sm' | 'md' | 'lg';
  /** Lift + border emphasis on hover (use for clickable cards). */
  interactive?: boolean;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
