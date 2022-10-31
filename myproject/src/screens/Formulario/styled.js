import styled from "styled-components";
import { fadeIn } from "./animation"

export const Container = styled.div`
background:linear-gradient(180deg, rgba(249, 250, 251, 0) 0%, rgba(249, 250, 251, 0) 0.01%, #D5DEFD 58.85%);
display:flex; 
justify-content:center;
align-items: center;
width: 100vw;
margin-top: 100px;
`
export const ModalContainer = styled.div`
width:77vw;
display: flex;
justify-content: space-around;
align-items: center;
`
export const ContainerText = styled.div`

width: 400px;
height: 200px;
opacity: ${props => props.opacity};
transition: 5s;
`
export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
animation: 1s ${props => props.opacity == 1 ?fadeIn : ""};
opacity: ${props => props.opacity};
transition: 1s;
`