import React from "react";
import * as S from "./SearchBar.style"

import {FaSistrix}  from "react-icons/fa";

const SearchBar = () =>{
    return(
    <S.Wrap>
        <FaSistrix className="logo" style={{fontSize:"2em",position:"absolute",top:30,right:470}}/>
      <S.Input />
    </S.Wrap>
    )
}

export default SearchBar