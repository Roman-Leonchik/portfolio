import styled from "styled-components";
import { StyledContainer } from "src/lib/styled-components/standart";

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.dark};
    color: ${({theme}) => theme.orange};
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
    box-shadow: 0 2px 20px ${({theme}) => theme.dark};
`;

export const StyledHeaderWrapp = styled(StyledContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
`;
