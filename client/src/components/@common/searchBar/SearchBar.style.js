import styled from "styled-components";
import { Theme } from "../../../style";


const Wrap = styled.div`
`

const Input = styled.input`
border:1px solid rgba(0,0,0,0.4);
border-radius: 20px;
padding:10px 10px 10px 45px;
width: 15vw;

&:hover{
    border:1px solid ${Theme.PRIMARY.GREEN_DARK}
}
&:focus{
    outline: rgba(0,0,0,0.4);
}
`



export {Wrap, Input}