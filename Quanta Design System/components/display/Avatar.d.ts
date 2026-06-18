import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Full name — drives initials and the fallback color. */
  name?: string;
  /** Image URL; falls back to initials if absent. */
  src?: string;
  /** @default "md" */
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export function Avatar(props: AvatarProps): JSX.Element;
