import styled from "styled-components";
import { fadeIn,translateY } from "../home/animations"


export const Container = styled.div`

width: 100%;
opacity: ${props => props.opacity == 1 ? 1 : 0};
animation: 3s ${fadeIn} ;
transition: 3s;


`
export const ContainerCard = styled.div`
scroll-behavior:smooth;
overflow-x:hidden;
overflow-y: hidden;
height:auto;
transform:${props=>props.opacity == 1 ? "translateX(0%)" : "translateX(100%)" } ;
display:${({opacity})=>opacity == 1? "flex"  : "none"};
/* transform:${({opacity})=>opacity == 1? "scaleX(1)"  : "scaleX(0)"}; */
animation: 1s ${translateY};
transition:2s;
width: 100%;
margin-top: 2rem;
/* transform:scaleX(1)  translateY(100px); */
@media (max-width: 768px){
overflow-x:auto;
overflow-y: hidden;
}
`

export const DivText = styled.div`

width: 50%;
transition: 3s;
@media (max-width: 768px){
    width: 90%;

}

`

export const Text = styled.div`
margin-top: 20px;
width: 100%;
`

export const ContainerTitle = styled.div`
margin-bottom: 20px;
`
export const ModalContainer = styled.div`
    background-color:#f5f5f5;
    box-shadow: 1px 5px 10px -5px black;
    padding:15px;
    margin:15px;
    border-radius:10px;
    max-width: 280px;
    height: 23rem;
`

export const P1 = styled.p`
font-size:1.5rem;
`
export const P2 = styled.p`
color:#677186;
font-size:0.9rem;
max-width: 284px;
`