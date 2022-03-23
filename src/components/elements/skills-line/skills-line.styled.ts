import styled from "styled-components";

export const StyledSkillsBlock = styled.div`
    &:not(:last-child) {
        margin-bottom: 30px;
    }
`;

export const StyledSkillsName = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
    font-weight: bold;
    position: relative;
`;

export const StyledSkillsProgress = styled.div<{progress: number}>`
    height: 3px;
    background: ${({ theme }) => theme.dark};
    border-radius: 3px;
    overflow: hidden;
    position:relative;
    &:after {
        content: '';
        display: block;
        background: ${({ theme }) => theme.orange};
        display: block;
        height: 4px;
        width: ${props => props.progress}%;
    }
`;

export const StyledSkillsProgressText = styled.div<{progress: number}>`
    border: 1px solid ${({ theme }) => theme.orange};
    color: ${({ theme }) => theme.orange};
    padding: 5px;
    position: absolute;
    border-radius: 3px;
    line-height: 1;
    bottom: 0;
    transform: translateX(-17px);
    z-index: 2;
    left: ${props => props.progress}%;
    &:after {
        content: '';
        border: 1px solid ${({ theme }) => theme.orange};
        border-width: 0 1px 1px 0;
        padding: 4px;
        transform: translateY(33.5px) rotate(45deg) skew(3deg, 3deg) translateX(-27px);
        bottom: 8px;
        position: absolute;
        background-color: ${({ theme }) => theme.bgColor};
    }
`;