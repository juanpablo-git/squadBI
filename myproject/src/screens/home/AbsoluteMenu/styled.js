import styled from "styled-components";
import {fadeIn} from "../animations"

export const ContainerMenu  =styled.div`
background-color: black;
width: 35%;
height: 100vh;
position: absolute;
opacity: ${props => props.display ==1 ? 0.9 : 0};
color: white;
display: ${props => props.display ==1 ? "flex" : "none"};
flex-direction: column;
justify-content: center;
align-items: center;
animation: 1s ${fadeIn} normal;
transition: 1s;

`