import styled from "styled-components";

const cardSize = {
    width: "300px",
    height: "300px",
};

interface IProps {
    image: string;
}

export const StlydCardImage = styled.div`
    background: url('${(props: IProps) => props.image}') no-repeat center;
    background-color: ${({ theme }) => theme.dark};
    background-size: cover;
    border-radius: 40px;
    height: 250px;
    margin-top: -120px;
    position: absolute;
    width: 300px;
    top: 0;
    left: 0;
    box-shadow: 0 2px 10px ${({ theme }) => theme.dark};
    transition: .4s ease-in;
`;

export const StlydCardTitle = styled.h3`
    color: ${({ theme }) => theme.dark};
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    top: 150px;
    margin: 0;
    padding: 5px 10px;
    left: 0;
    right: 0;
    transition: .4s ease-in;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const StlydCardDescription = styled.p`
    margin: 0 0 20px;
    height: 54px;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    transition: .4s ease-in;
`;

export const StlydCardButton = styled.button`
    opacity: 0;
    display: flex;
    width: 180px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 40px;
    background: transparent;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 1;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.burgundy};
    background-color: ${({ theme }) => theme.burgundy};
    position: relative;
    font-weight: bold;
    letter-spacing: 1px;
    transition: .4s ease-in;
    border-radius: 10px;
    &:hover {
        background-color: ${({ theme }) => theme.white};
        color: ${({ theme }) => theme.dark};
        box-shadow: 2px 2px 5px ${({ theme }) => theme.dark};
    }
`;

export const StlydCardWrapp = styled.div`
    height: ${cardSize.height};
    width: ${cardSize.width};
    position: relative;
    
`;

export const StlydCardBlock = styled.div`
    background-color: ${({ theme }) => theme.white};
    bottom: 0;
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.4);
    height: ${cardSize.height};
    width: ${cardSize.width};
    left: 0;
    margin: auto;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    padding-top: 200px;
    text-align: center;
    color:${({ theme }) => theme.gray};
    transition: .4s ease-in;
    &:hover {
        height: 450px;
        padding-top: 300px;
        z-index: 2;
        transition: .4s ease-out;
        ${StlydCardImage} {
            background-size: cover;
            border-radius: 0;
            margin-top: 0;
            transition: .4s ease-out;
        }
        ${StlydCardTitle} {
            background-color: rgba(46, 44, 47, 0.8);
            color: ${({ theme }) => theme.white};
            top: 100px;
            transition: .4s ease-out;
            box-shadow: 0 0 5px ${({ theme }) => theme.orange};
        }
        ${StlydCardButton} {
            opacity: 1;
            transition: .4s ease-out;
        }
    }
`;