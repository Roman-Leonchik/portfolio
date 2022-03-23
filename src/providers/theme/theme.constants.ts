import defaultTheme from "./themes/default.theme";

export enum ThemeVariant {
    Default = "default",
}

export const ThemesProps: Record<ThemeVariant, typeof defaultTheme> = {
    [ThemeVariant.Default]: defaultTheme,
};

export type ThemePropsType = typeof ThemesProps[keyof typeof ThemesProps];
