import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Show a remove (×) button and handle the click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Leading Lucide icon name. */
  icon?: string;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
