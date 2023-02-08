import styled from "styled-components"
import {fadeIn,moveLeft} from "../home/animations"

export const Dl = styled.ul`
list-style: none;
`
export const Dt = styled.li`
padding-top: 10px;
font-size: 14px;
padding-bottom: 10px;


`

export const T2 = styled.h2`
font-weight: 400;

`
export const TituloContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
padding-top:20px;
padding-bottom: 20px;
opacity: ${props => props.opacity ? 1 : 0 };
animation:2s ${fadeIn} ease-out;
transition: 2s;
`

export const ModalContainerButton = styled.div`
color: #f2f4f7;
display: flex;
justify-content: center;
align-items: center;
opacity: ${props => props.opacity ? 1 : 0 };
animation:2s ${fadeIn} ease-out ;
transition: 2s;
height: 200px;
`

export const ListaEsquerda = styled.div`
width: 500px;
`
export const ListaDireita = styled.div`
width: 500px;

`

export const ModalContainer = styled.div`

display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: center;
opacity: ${props => props.opacity };
animation: 2s ${fadeIn} ease-out ;
transition: 2s;

`

export const Paragrafo = styled.p`
margin-left:  20px;
font-size:12px;
width:50%;
`

export const Containeer = styled.div`
background-color: #F5F5F5;
width: 100vw;
height: auto;
padding-top:50px;

`
export const DivTop = styled.div`
    width: 100vw;
    height: 50%;
    margin-bottom: 90px;
`
export const DivButton = styled.div`
background: linear-gradient(180deg, #101828 0%, rgba(16, 24, 40, 0.89) 100%);
padding: 10px;
    width: 100%;
    height: 50%;

`

export const ModalFuturo = styled.div`
background-color: #fff;
border-radius: 20px;
box-shadow: 0 14px 30px rgba(78,64,64,.17);
padding: 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
z-index:1;
animation: ${moveLeft} 1s;


`