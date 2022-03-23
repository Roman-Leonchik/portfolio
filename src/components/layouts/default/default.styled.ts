import styled from "styled-components";

export const StyledDefaultLayout = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: ${({theme}) => theme.white};
`;