import styled from "styled-components"
import {fadeIn} from "../home/animations"
export const T2 = styled.h2`

`
export const TituloContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
padding-top:20px;
padding-bottom: 20px;
opacity: ${(props => props.opacity)};
animation:3s ${fadeIn} ;
transition: 2s;
`
export const ModalContainer = styled.div`

display: flex;
opacity: ${(props => props.opacity)};
animation:3s ${fadeIn} ;
transition: 2s;

`

export const Paragrafo = styled.p`
margin-left:  20px;
font-size:12px;
width:50%;
transition-property: opacity, left, top, height;
  transition-duration: 3s, 5s;
`

export const Containeer = styled.div`
background-color: #F5F5F5;
width: 100vw;
height: 100vh;
`
export const DivTop = styled.div`

    width: 100%;
    height: 50%;
`
export const DivButton = styled.div`
    width: 50%;
    height: 100vh;

`