import React from "react";
import { useModals } from "src/providers/modals/modals.provider";
import { IWorkContent } from "../popup/work/popup-work.module";
import {
    StlydCardWrapp,
    StlydCardBlock,
    StlydCardImage,
    StlydCardTitle,
    StlydCardDescription,
    StlydCardButton,
} from "./card-work.styled";

interface IProps {
    image: string;
    title: string;
    modal: IWorkContent;
}

export const CardWork: React.FC<IProps> = ({ children, image, title, modal }) => {
    const modals = useModals();

    const toggleWorkModal = () => {
        modals?.openWorkModal(
            modal.letter,
            modal.image,
            modal.title,
            modal.content
        );
    };

    return (
        <>
            <StlydCardWrapp>
                <StlydCardBlock>
                    <StlydCardImage image={image} />
                    <StlydCardTitle>{title}</StlydCardTitle>
                    <StlydCardDescription>{children}</StlydCardDescription>
                    <StlydCardButton onClick={toggleWorkModal}>more details</StlydCardButton>
                </StlydCardBlock>
            </StlydCardWrapp>
        </>
    )
}