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
width:77vw;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`
export const ContainerText = styled.div`

width: 90%;
max-width: 500px;
height:auto;
opacity: ${props => props.opacity};
transition: 5s;
`
export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
animation: 1s ${props => props.opacity ? fadeIn : " "};
opacity: ${props => props.opacity};
transition: 1s;
background-color: #ffff;
padding: 30px;
border-radius: 10px;
width: 50%;
`

export const Input = styled.input `
margin-bottom:10px;
margin-right:10px;
border-color: transparent;
border-bottom: 2px #61616a solid ;
outline: none;

&:focus{
    background-color: antiquewhite;
    border:  2px #61616a solid
}

`