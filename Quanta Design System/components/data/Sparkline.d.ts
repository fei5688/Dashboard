import React from 'react';

export interface SparklineProps extends React.SVGAttributes<SVGElement> {
  /** Series values, left to right. */
  data: number[];
  /** @default 96 */
  width?: number;
  /** @default 28 */
  height?: number;
  /** Stroke color (any CSS / token). @default var(--accent) */
  color?: string;
  /** Render the soft gradient area under the line. @default true */
  fill?: boolean;
  strokeWidth?: number;
}

export function Sparkline(props: SparklineProps): JSX.Element;
