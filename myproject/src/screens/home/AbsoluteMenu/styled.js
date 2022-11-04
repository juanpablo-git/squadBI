import styled from "styled-components";

export const ContainerMenu  =styled.div`
background-color: black;
width: 35%;
height: 100vh;
position: absolute;
opacity: .9;
color: white;
display: ${props => props.display ==1 ? "flex" : "none"};
flex-direction: column;
justify-content: center;
align-items: center;
`