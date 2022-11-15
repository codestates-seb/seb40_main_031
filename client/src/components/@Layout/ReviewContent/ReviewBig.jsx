import React from 'react';
import * as S from './ReviewBig.style';
import {FaRegUserCircle} from 'react-icons/fa';
import {FaRegThumbsUp} from 'react-icons/fa'
import {HiOutlinePencil} from 'react-icons/hi';
import {MdClose} from 'react-icons/md';

const ReviewBig = () => {
    return(
        <>
        <S.Template>
            <S.UserInfo>
                <S.UserIcon>
                    <FaRegUserCircle />
                </S.UserIcon>
                <S.UserName>
                    &nbsp;유저 이름
                </S.UserName>
            </S.UserInfo>
            <S.Content>
                이 책은 내 앞의 대상에 대해 익숙하게 명명하고 
                분류함으로써 이해의 그물로 포획혀라는 인간의 높은 자리로부터 벗어나 세계를, 
                세계의 쉽사리 범주화 될 수 없는 모든 존재들을 물끄러미 그 자체로 바라보게 한다.
                이 책은 내 앞의 대상에 대해 익숙하게 명명하고 
                분류함으로써 이해의 그물로 포획혀라는 인간의 높은 자리로부터 벗어나 세계를, 
                세계의 쉽사리 범주화 될 수 없는 모든 존재들을 물끄러미 그 자체로 바라보게 한다.
                이 책은 내 앞의 대상에 대해 익숙하게 명명하고 
                분류함으로써 이해의 그물로 포획혀라는 인간의 높은 자리로부터 벗어나 세계를, 
                세계의 쉽사리 범주화 될 수 없는 모든 존재들을 물끄러미 그 자체로 바라보게 한다.
                이 책은 내 앞의 대상에 대해 익숙하게 명명하고 
                분류함으로써 이해의 그물로 포획혀라는 인간의 높은 자리로부터 벗어나 세계를, 
                세계의 쉽사리 범주화 될 수 없는 모든 존재들을 물끄러미 그 자체로 바라보게 한다.
            </S.Content>
            <S.BottomContent>
                
                <S.LeftIconBox>
                    <S.LeftIcon>
                        <FaRegThumbsUp />
                    </S.LeftIcon>
                    <S.LeftText>
                        &nbsp;5
                    </S.LeftText>
                </S.LeftIconBox>
                
                <S.RightIconBox>
                    <S.RightIconUpdate>
                        <HiOutlinePencil />
                    </S.RightIconUpdate>
                    <S.RightIconDelete>
                        <MdClose />
                    </S.RightIconDelete>
                </S.RightIconBox>

            </S.BottomContent>
        </S.Template>
        </>
    )
}
export default ReviewBig;