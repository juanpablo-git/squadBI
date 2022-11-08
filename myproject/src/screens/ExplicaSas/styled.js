import styled from "styled-components";
import {fadeIn} from "../home/animations"


export const Container = styled.div`
display: flex;
flex-wrap: wrap;
background: linear-gradient(180deg, #D5DEFD 0%, #F5F5F5 17.76%);;
justify-content:center;
align-items: flex-end;
width: 100%;
opacity: ${props => props.opacity || 0};
animation: 3s ${fadeIn} ;
transition: 3s;
`

export const DivText = styled.div`

width: 400px;
transition: 3s;
margin-top:100px



`

export const Text = styled.div`
margin-top: 20px;
width: 100%;
`

export const ContainerTitle = styled.div`
margin-bottom: 20px;
`