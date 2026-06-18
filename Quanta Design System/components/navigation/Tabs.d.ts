import React from 'react';

export interface TabItem {
  value: string;
  label: string;
  /** Optional Lucide icon name. */
  icon?: string;
  /** Optional trailing count. */
  count?: number;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tabs as strings or {value,label,icon,count}. */
  tabs: (string | TabItem)[];
  /** Controlled active value. */
  value?: string;
  /** Initial value when uncontrolled. */
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
