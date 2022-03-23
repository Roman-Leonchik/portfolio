import styled from "styled-components";

interface IProps {
    isVisivility: boolean;
}

export const StyledContent = styled.div<IProps>`
    opacity: ${({isVisivility}) => isVisivility ? 0 : 1};
    transition: 1s;
`;