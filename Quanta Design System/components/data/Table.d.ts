import React from 'react';

export interface TableColumn<Row = any> {
  /** Field key in each row object. */
  key: string;
  /** Header label. */
  header: React.ReactNode;
  /** Text alignment. @default "left" */
  align?: 'left' | 'center' | 'right';
  /** CSS width for the column (e.g. "120px", "30%"). */
  width?: string;
  /** Force mono/tabular figures (auto-true when align="right"). */
  numeric?: boolean;
  /** Mark sortable — renders the sort affordance when onSort is set. */
  sortable?: boolean;
  /** Custom cell renderer. */
  render?: (value: any, row: Row, index: number) => React.ReactNode;
}

export interface TableProps<Row = any> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  columns: TableColumn<Row>[];
  data: Row[];
  /** Stable key per row. */
  rowKey?: (row: Row, index: number) => string | number;
  onRowClick?: (row: Row, index: number) => void;
  /** Tighter 36px rows. */
  dense?: boolean;
  /** Currently sorted column key. */
  sortBy?: string;
  sortDir?: 'asc' | 'desc';
  onSort?: (key: string) => void;
}

export function Table<Row = any>(props: TableProps<Row>): JSX.Element;
