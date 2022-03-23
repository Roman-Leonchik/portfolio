import React from "react";
import {
    StyledTitle,
    StyledTitleWrapp,
    StyledTitleLine,
} from "./title-page.styled";

export const TitlePage: React.FC = ({children}) => {
    return (
        <StyledTitleWrapp>
            <StyledTitleLine/>
            <StyledTitle>{children}</StyledTitle>
            <StyledTitleLine left/>
        </StyledTitleWrapp>
    )
}