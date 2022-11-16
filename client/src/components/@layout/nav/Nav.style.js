import styled from "styled-components";

const Wrap = styled.div`
   background-color: ${(props) => props.backgoudColor ||'#B9F6CA'};
   .logo{
    font-size: 3em;
   }
`

const LayoutContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 20px;
   width: 100%;
   height: 4em;
   display: flex;
   align-items: center;
   font-size: 21px;
   @media screen {
    max-width  : 1320px;
    margin: auto;
   }
`

const Container = styled.div`
display: flex;
`

export {Wrap, Container, LayoutContainer}