import React from "react";
import {
    StyledWorkBlock,
    StyledWorkWrapp,
    StyledWorkBg,
    StyledWorkClose,
    StyledWorkFirstScreen,
    StyledWorkTitle,
    StyledLetterScreen,
    StyledWorkOtherContent,
    StyledWorkContainer,
} from "./popup-work.styled";

export interface IWorkContent {
    letter: string;
    title: string | JSX.Element;
    content: string | JSX.Element;
    image: string;
    animation?: boolean | undefined;
}

interface IWorkModal extends IWorkContent{
    closeModal: () => void;
}

export const PopupWork: React.FC<IWorkModal> = ({ letter, title, content, image, animation, closeModal }) => {
    return (
        <StyledWorkBlock animation={animation}>
            <StyledWorkBg image={image} />
            <StyledLetterScreen>{letter}</StyledLetterScreen>
            <StyledWorkWrapp>
                <StyledWorkClose onClick={closeModal}/>
                <StyledWorkFirstScreen>
                    <StyledWorkTitle>{title}</StyledWorkTitle>
                </StyledWorkFirstScreen>
                <StyledWorkOtherContent>
                    <StyledWorkContainer>{content}</StyledWorkContainer>
                </StyledWorkOtherContent>
            </StyledWorkWrapp>
        </StyledWorkBlock>
    )
}