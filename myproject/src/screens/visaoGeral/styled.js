import styled from "styled-components"
import {fadeIn} from "../home/animations"
export const T2 = styled.h2`

.red-bg {
  background-color: red;
}`
export const TituloContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
padding-top:20px;
padding-bottom: 20px;
`
export const ModalContainer = styled.div`
display: flex;

`

export const Paragrafo = styled.p`
/* animation: 2s ${props => props.isIntersection && fadeIn }; */
margin-left:  20px;
font-size:12px;
width:50%;
${props => props.isIntersection ? 'transform:scale(1);' : 'transform:scale(0);'};
transition: .3s ease-in-out;
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