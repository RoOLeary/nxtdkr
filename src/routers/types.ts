/* eslint-disable unused-imports/no-unused-vars */
import type { Route as NextRouter } from 'next';
import type { ComponentType } from 'react';

// TypedRoutes still experimental. So use with caution. (Still cool though)
export type Route<T = string> = NextRouter<string>;
export type PathName = Route<string>;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
