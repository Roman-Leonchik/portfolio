import styled from "styled-components";
import { media } from "src/lib/styled-components/variables";

export const StyledContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    ${media.tablet`
        grid-template-columns: 1fr;
    `}
`;

export const StyledSkillsWrapp = styled.div`
    &:not(:last-child) {
        margin-bottom: 40px;
    }
`;

export const StyledSkillsTitle = styled.h3`
    margin: 0 0 20px;
    color: ${({ theme }) => theme.orange};
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.3px;
`;

export const StyledSkillsItem = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: 0.5px;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
`;