import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: string;
    baseColor: string;
    baseLight: string;
    baseDark: string;
    text: string;

    emphasize: string;
    emphasizeDark: string;
    badgeGreen: string;
  }
}
