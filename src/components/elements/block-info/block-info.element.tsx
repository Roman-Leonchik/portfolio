import React from "react";
import {
    StyledBlockInfoItem,
    StyledBlockInfoDate,
    StyledBlockInfoTitle,
    StyledBlockInfoText,
} from "./block-info.styled";

interface IArray {
    id: string;
    date: string;
    title: string;
    text: string;
}

interface IProps {
    infoArray: IArray[];
}

export const BlockInfo: React.FC<IProps> = ({ infoArray }) => {
    return (
        <>
            {
                infoArray.map((item) => (
                    <StyledBlockInfoItem key={item.id}>
                        <StyledBlockInfoDate>{item.date}</StyledBlockInfoDate>
                        <StyledBlockInfoTitle>{item.title}</StyledBlockInfoTitle>
                        <StyledBlockInfoText>{item.text}</StyledBlockInfoText>
                    </StyledBlockInfoItem>
                ))
            }
        </>
    )
}