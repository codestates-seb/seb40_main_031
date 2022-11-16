import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0,0,0,0.4);
    margin-left: 10px;
    border:none;
`
const Button = styled.button`
border-style: none;
font-size: 2em;
background-color: ${(props) => props.backgoudColor ||'#B9F6CA'};
`
export {Wrap,Button}