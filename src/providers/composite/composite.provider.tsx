import React from "react";
import { CookiesProvider } from "react-cookie";
import StyledProvider from "src/providers/styled/styled.provider";
import ThemeProvider from "src/providers/theme/theme.provider";
import { ModalsProvider } from "../modals/modals.provider";

const CompositeProvider: React.FC = ({ children }) => {
    return (
        <CookiesProvider>
            <ThemeProvider>
                <StyledProvider>
                    <ModalsProvider>
                        {children}
                    </ModalsProvider>
                </StyledProvider>
            </ThemeProvider>
        </CookiesProvider>
    );
};

export default CompositeProvider;