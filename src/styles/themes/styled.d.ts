/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import theme from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}