import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import * as S from './Loading.style';
import { Theme } from '../../../style';
const Loading = ({width, height}) => {
    return(
        <>
            <S.Container width = {width} height = {height}>
                <BeatLoader color = {Theme.PRIMARY.GREEN_DARK}  />
            </S.Container>
        </>
    )
}
export default Loading;