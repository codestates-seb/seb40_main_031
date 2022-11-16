import React from 'react';
import RingLoader from "react-spinners/RingLoader";
import * as S from './Loading.style';
import { Theme } from '../../../style';
const Loading = () => {
    return(
        <>
            <S.Container>
                <RingLoader color = {Theme.PRIMARY.GREEN_DARK} size = {100} />
            </S.Container>
        </>
    )
}
export default Loading;