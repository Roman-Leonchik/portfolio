import React from "react";
import { StyledGlobal } from "./styled.styled";
import {
    ThemeProvider as StyledThemeProvider,
} from "styled-components";
import { StyleSheetManager } from "styled-components";
import { useTheme } from "../theme/theme.hooks";
import { ThemePropsType } from "../theme/theme.constants";

declare module "styled-components" {
    export interface DefaultTheme extends ThemePropsType {}
}

const StyledProvider: React.FC = ({ children }) => {
    const { themeProps } = useTheme();
    return (
        <StyleSheetManager>
            <StyledThemeProvider theme={themeProps}>
                <>
                    <StyledGlobal/>
                    {children}
                </>
            </StyledThemeProvider>
        </StyleSheetManager>
    );
};

export default StyledProvider;
