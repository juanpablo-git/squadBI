import styled from "styled-components";
import {fadeIn} from "../home/animations"


export const Container = styled.div`

width: 100%;
opacity: ${props => props.opacity || 0};
animation: 3s ${fadeIn} ;
transition: 3s;

`

export const DivText = styled.div`

max-width: 500px;
width: 90%;
transition: 3s;
<<<<<<< HEAD
margin-top:100px


=======
@media (max-width: 768px){
    width: 90%;

}
>>>>>>> ba9223232cb331a1cbc58c2005f211d61cc37d7b

`

export const Text = styled.div`
margin-top: 20px;
width: 100%;
`

export const ContainerTitle = styled.div`
margin-bottom: 20px;
`