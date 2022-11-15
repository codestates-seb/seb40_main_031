import styled from "styled-components";
import {Theme} from '../../../style/index'


const ButtonTemplate = styled.button`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    background-color: ${Theme.PRIMARY.GREEN};
    font-weight: bold;
    border-radius: 5px;
    border: none;
    box-shadow: inset 1px 1px 0px 0px hsl(0deg 0% 100% / 70%);
    &:hover {
        background-color: ${Theme.PRIMARY.GREEN_DARK};
    }
    &:active {
        background-color:  ${Theme.PRIMARY.GREEN};
        border-color: ${Theme.PRIMARY_GREEN_DARK};
        box-shadow: none;
    }
`;
export {ButtonTemplate}