import React from 'react';

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Uppercase metric label. */
  label: string;
  /** Formatted value (string keeps your formatting). */
  value: React.ReactNode;
  /** Signed percent change as a number (colored + arrow), or a custom node. */
  delta?: number | React.ReactNode;
  /** Trailing context after the delta, e.g. "vs last week". */
  deltaLabel?: string;
  /** Optional sparkline series. */
  spark?: number[];
  /** Override sparkline color (defaults by delta sign). */
  sparkColor?: string;
  /** Lucide icon in the top-right. */
  icon?: string;
}

export function StatCard(props: StatCardProps): JSX.Element;
