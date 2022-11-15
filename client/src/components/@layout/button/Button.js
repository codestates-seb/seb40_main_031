import React from 'react';
import * as S from './Button.style';

const Button  = ({width, text, height}) => {
    return(
        <>
            <S.ButtonTemplate width = {width} height = {height}>
                {text}
            </S.ButtonTemplate>
        </>
    )
}
export default Button;



{
    /* 사용 예시
   <Button text="같이 이야기하기" width="200px" height = "200px"/> */
}