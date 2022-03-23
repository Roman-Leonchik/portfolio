import React from "react";
import {
    StyledLoaderWrapp,
    StyledLoaderBlock,
} from "./loader-content.styled";

interface IProps {
    isVisivility: boolean;
}

export const LoaderContent: React.FC<IProps> = ({ isVisivility }) => {
    return (
        <StyledLoaderWrapp isVisivility={isVisivility}>
            <StyledLoaderBlock />
        </StyledLoaderWrapp>
    )
}