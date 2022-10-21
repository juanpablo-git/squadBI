import styled from "styled-components"
import {fadeIn} from "../home/animations"

export const Dl = styled.ul`
list-style: none;
`
export const Dt = styled.li`
padding-top: 10px;
font-size: 14px;
padding-bottom: 10px;


`

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

export const ModalContainerButton = styled.div`
color: #f2f4f7;
display: flex;
justify-content: space-between;
opacity: ${(props => props.opacity)};
animation:3s ${fadeIn} ;
transition: 2s;
`

export const ListaEsquerda = styled.div`
padding-left: 50px;
width: 50%;
`
export const ListaDireita = styled.div`
padding-right: 50px;
width: 50%;

`

export const ModalContainer = styled.div`

display: flex;
justify-content:center;
align-items: center;
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
height: auto;
`
export const DivTop = styled.div`

    width: 100%;
    height: 50%;
`
export const DivButton = styled.div`
background: linear-gradient(180deg, #101828 0%, rgba(16, 24, 40, 0.89) 100%);
padding: 10px;
    width: 100%;
    height: 50%;

`