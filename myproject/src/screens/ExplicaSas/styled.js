import styled from "styled-components";
import {fadeIn} from "../home/animations"


export const Container = styled.div`
display: flex;
background: linear-gradient(180deg, #D5DEFD 0%, #F5F5F5 17.76%);;
justify-content:center;
align-items: flex-end;
width: 100vw;
opacity: ${props => props.opacity || 0};
animation: 3s ${fadeIn} ;
transition: 3s;
`

export const DivText = styled.div`

margin-top: 30px;
font-size: 13px;
width: 400px;
transition: 3s;

`

export const Text = styled.div`
margin-top: 20px;
width: 400px;
`

export const ContainerTitle = styled.div`
margin-bottom: 20px;
`