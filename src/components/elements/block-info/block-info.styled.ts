import styled from "styled-components";

export const StyledBlockInfoItem = styled.div`
    width: 300px;
    padding: 0 30px;
    position: relative;
    &:after,
    &:before {
        content: '';
        position: absolute;
        top: 10px;
        background: ${({ theme }) => theme.orange};
    }
    &:before{
        left: 1px;
        width: 30px;
        height: 1px;
    }
    &:after {
        left: 0;
        width: 1px;
        height: 100%;
    }
    &:not(:last-child) {
        padding-bottom: 30px;
    }
    &:first-child:last-child {
        &:before {
            display: none;
        }
    }
    &:last-child {
        &:after {
            display: none;
        }
        &:before {
            left: 0;
        }
    }
`;

export const StyledBlockInfoDate = styled.div`
    color: ${({ theme }) => theme.orange};
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.orange};
    line-height: 2;
    display: inline-block;
    padding: 0 10px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-bottom: 10px;
    border-radius: 10px;
`;

export const StyledBlockInfoTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
    margin-bottom: 15px;
`;

export const StyledBlockInfoText = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.grayLight};
`;