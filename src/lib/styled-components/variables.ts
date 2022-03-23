import { css, DefaultTheme, ThemedCssFunction } from "styled-components";

/* Media */
export const mediaSizes = {
    desktop: 1440,
    tabletM: 1024,
    tablet: 768,
    mobile: 375,
};

type TSizes = typeof mediaSizes;

type TMedias = 
    {
        [Property in keyof TSizes as Property]: ThemedCssFunction<DefaultTheme>;
    };

const keys = Object.keys(mediaSizes) as Array<keyof TSizes>;

export const media = keys.reduce((acc, label) => {
    return {
        ...acc,
        [label]: (
            ...args: Parameters<ThemedCssFunction<DefaultTheme>>
        ) => css`
            @media (max-width: ${mediaSizes[label]}px) {
                ${css(...args)}
            }
        `,
    };
}, {} as TMedias);