import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 10px 25px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    outline: none;
    border-radius: 50px;
    text-decoration: none;
    display: inline-block;
    transition: all .3s;

    &:hover,
    &:focus {
        border: 1px solid #dc2927;
        color: #dc2927;
    }
`;

export default Button