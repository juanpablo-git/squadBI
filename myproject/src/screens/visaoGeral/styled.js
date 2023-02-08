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
color: #ffff;
flex-wrap: wrap;
display: flex;
justify-content:center;
align-items: center;
opacity: ${props => props.opacity == 1 ? 1 : 0 };
animation:2s ${fadeIn} ease-out ;
transition: 2s;
height: 500px;
width: 80%;
background-color: #2e3295   ;
border-radius: 25px;


`

export const ListaEsquerda = styled.div`
height: auto;
width: 430px;
@media (max-width: 768px){
        width:90%;
    }

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
@media (max-width: 768px){
    width:90%;
    }
width: 150px;
height: 50px;
border-radius: 10px;
box-shadow: 1px 5px 10px -5px black;
margin-right: 5px;
`

export const Paragrafo = styled.p`




`

export const Containeer = styled.div`

width: 100%;
height: auto;
padding-top: 100px;
padding-bottom: 50px;



`
export const DivTop = styled.div`
    width: 100%;
    height: 50%;
    @media (max-width: 768px){
        display: flex;
        flex-wrap:wrap ;
    width:100%;
    justify-content: center;
    align-items: center;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column  ;
   
 
   
`
export const DivButton = styled.div`
/* background: linear-gradient(180deg, #101828 0%, rgba(16, 24, 40, 0.89) 100%); */
    width: 100%;
    height: 50%;
padding-top: 100px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;



`

export const Button  = styled.button`
border: none;
font-size: 15px;
width: 200px;
height: 50px;
border-radius: 32px;
color: #fff;
background:linear-gradient(180deg, rgba(0, 205, 194, 0.20131) 0%, rgba(50, 129, 250, 0.932385) 0.01%, #02CFC6 100%);
&:hover{
    opacity: 0.7;
    transition: 0.5s;
}
`
export const ButtonAngulo = styled.button`
    height: 50px;
    width: 55px;
    border-radius:100%;
    border: transparent;
    padding: 10px;
    border: .1rem solid #e4e7ec;
    opacity: ${props => props.opacity == 1 ? 1 : 0 };



`