import styled from "styled-components";
import { fadeIn } from "./animation"

export const Container = styled.div`
background:linear-gradient(180deg,rgba(245,245,245,1) 0%, rgba(213,222,253,1) 100%);
display:flex; 
justify-content:center;
align-items: center;
width: 100vw;
padding-top:  120px;
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
animation: 1s ${props => props.opacity ? fadeIn : " "};
opacity: ${props => props.opacity};
transition: 1s;
`