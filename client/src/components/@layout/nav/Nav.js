import React from "react";
import { FaBars,FaReadme } from "react-icons/fa"; 

import SearchBar from "../../@common/SearchBar/SearchBar";
import SingUpButton from "../../SingUpButton/SingUpButton";

import * as S from "./Nav.style"

const Nav  = () =>{
    return(
        <S.Wrap>
            <FaBars className="logo"/>
            <FaReadme className="logo" style={{marginLeft:"240px"}}/>
            
            <S.Container>
            <SearchBar/>
            <SingUpButton title={"회원가입"}/>
            <SingUpButton title={"로그인"} />
            </S.Container>

        </S.Wrap>
    )
}

export default Nav