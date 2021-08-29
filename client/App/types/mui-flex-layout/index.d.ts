declare module 'mui-flex-layout' {
  import { FC } from 'react';
  import { BoxProps } from '@material-ui/core';

  type Layout = {
    color: any
  }

  export const Row: FC<BoxProps>;
  export const Column: FC<BoxProps>;
  export const Layout: FC<Layout>;
  export const Padded: FC<Padded>;
}