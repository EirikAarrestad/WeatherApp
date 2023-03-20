import styled from "styled-components";

export const StyledSubHeading = styled.p``;
export const StyledP = styled.p``;

export const StyledDIV = styled.div`
    margin: auto;
    display: block;
    text-align: center;
`;

export const StyledInput = styled.input`
    outline: none;
    margin-right: 10px;
    border: 1px solid #006edb;
    font-size: 15px;
    color: #006edb;
    background-color: transparent;
    border-radius: 3px;
`;

export const StyledButton = styled.button`
    color: #006edb;
    outline: none;
    padding: 2px 6px;
    border: 1px solid #d8e8f9;
    border-radius: 3px;
    font-size: 15px;
    background-color: transparent;

    &:hover {
        background-color: #eef6f8;
        border: #006edb solid 1px;
    }
`;

export const StyledHeading = styled.h1`
    font-size: 50px;
`;
export const StyledImg = styled.img`
    margin: 0 auto;
    width: 100px;
`;

export const TemperaturContainerDiv = styled.div`
    position: absolute;
    top: 210px;
    display: flex;
`;

export const HeaderBackground = styled.div`
    background: #e9ecef;
    padding: 20px 30px;
`;

export const NavElement = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;

export const UnorderedlistElement = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
`;
export const ListElement = styled.li`
    float: right;
`;

export default {
    StyledDIV,
    StyledInput,
    StyledHeading,
    StyledButton,
    StyledP,
    StyledImg,
    TemperaturContainerDiv,
    StyledSubHeading,
    HeaderBackground,
    ListElement,
    UnorderedlistElement,
    NavElement,
};
