import styled from "styled-components";
import {fadeIn} from "../home/animations"


export const Container = styled.div`

width: 100%;
opacity: ${props => props.opacity || 0};
animation: 3s ${fadeIn} ;
transition: 3s;

`

export const DivText = styled.div`

width: 400px;
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