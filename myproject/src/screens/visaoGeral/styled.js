import styled from "styled-components"
import {fadeIn} from "../home/animations"

export const Dl = styled.ul`
list-style: none;
`
export const Dt = styled.li`
padding-top: 10px;
font-size: 15px;
padding-bottom: 10px;


`

export const T2 = styled.h2`
font-weight: 400;

`
export const TituloContainer = styled.div`
width:100%;
display:flex;
justify-content: center;
opacity: ${props => props.opacity == 1 ? 1 : 0 };
animation:2s ${fadeIn} ease-out;
transition: 2s;
`

export const ModalContainerButton = styled.div`
color: #000;
flex-wrap: wrap;
display: flex;
justify-content:center;
align-items: center;
opacity: ${props => props.opacity == 1 ? 1 : 0 };
animation:2s ${fadeIn} ease-out ;
transition: 2s;
height: 500px;
`

export const ListaEsquerda = styled.div`
height: auto;
width: 430px;
`
export const ListaDireita = styled.div`
margin-left: 50px;
height: auto;
width: auto;
`

export const ModalContainer = styled.div`
display: flex;
flex-direction: row;
justify-content:center;
align-items: center;
flex-wrap: wrap;
opacity: ${props => props.opacity == 1 ? 1 : 0 };
animation: 2s ${fadeIn} ease-out ;
transition: 2s;
width: 100%;
background-color: #D5DEFD ;
`

export const Paragrafo = styled.p`




`

export const Containeer = styled.div`
background-color:#d5defd;
width: 100%;
height: auto;
padding-top: 100px;
padding-bottom: 50px;

`
export const DivTop = styled.div`
background-color:#d5defd;
    width: 100%;
    height: 50%;
`
export const DivButton = styled.div`
/* background: linear-gradient(180deg, #101828 0%, rgba(16, 24, 40, 0.89) 100%); */
background-color:#d5defd;
    width: 100%;
    height: 50%;
padding-top: 100px;

`