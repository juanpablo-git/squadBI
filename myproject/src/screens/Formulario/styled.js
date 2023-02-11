import styled from "styled-components";
import { fadeIn } from "./animation"

export const Container = styled.div`

width: 100%;
padding-top:  120px;
padding-bottom: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const ModalContainer = styled.div`
border-radius:25px;
width:80%;
display:flex;
flex-wrap: wrap;
justify-content:center;
align-items:center;
background:rgb(68,56,255);
background:linear-gradient(47deg, rgba(68,56,255,.7) 0%, rgba(36,30,120,.7) 81%) , url("./cubos1.jpeg");
justify-content:center;
margin-top:"60px";
padding:20px;
opacity: ${props => props.opacity};
transition: 1s;
@media (min-width: 768px){
        flex-wrap: nowrap;
    }
`
export const ContainerTitles = styled.div`
max-width:50%;
@media (max-width: 768px){
    min-width: 100%;
}

`
export const ContainerText = styled.div`

width: 100%;
height:auto;
opacity: ${props => props.opacity};
transition: 5s;
display: flex;
justify-content: space-around;
align-items: center;
color: white;
@media (max-width: 768px){
   max-width: 100%;
}
`
export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
animation: 1s ${props => props.opacity ? fadeIn : " "};
opacity: ${props => props.opacity};
transition: 1s;
/* background-color: #ffff; */
border-radius: 10px;
max-width: 50%;
padding: 10px;
@media (max-width: 768px){
    min-width: 100%;
    }

`

export const Input = styled.input `
margin-bottom:10px;
border:none;
border-radius: 5px;
border-bottom: 2px #61616a solid ;
outline: none;
padding: 5px 10px;
width: 43%;

`