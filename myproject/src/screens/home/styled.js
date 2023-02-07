import styled from "styled-components"
import {fadeIn} from "./animations"
export const Containeer = styled.div`
<<<<<<< HEAD
  background-image: url("./africano.png") ;
  height: 100vh; /* You must set a specified height */
=======
background-image: url("./background.png") ;
 height: 100vh; /* You must set a specified height */
>>>>>>> ba9223232cb331a1cbc58c2005f211d61cc37d7b
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  @media (max-width: 769px){
    background-image: ""
  }
`
export const Header1 = styled.header`
justify-content: space-around;
display: flex;
width: 100%;
height: 15%;
animation: 2s ${fadeIn};
@media (min-width: 769px){
    display: none;
    color: purple;
}
`
export const Header2 = styled.header`
justify-content: space-around;
display: flex;
width: 100%;
height: 15%;
animation: 2s ${fadeIn};
@media (max-width: 769px){
    display: none;
    color: purple;
}
`


export const Dl = styled.dl`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 20px;
`
export const Dt = styled.dt`
color: #fff;
font-size: 15px;
margin-left: 20px;
`

export const Button1 = styled.button`
border: none;
font-size: 15px;
width: 200px;
height: 50px;
border-radius: 32px;
color: #fff;
background:linear-gradient(180deg, rgba(0, 205, 194, 0.20131) 0%, rgba(50, 129, 250, 0.932385) 0.01%, #02CFC6 100%);
&:hover{
    opacity: 0.7;
    transition: 0.5s;
}
`
export const Button2 = styled.button`
border: none;
padding: 10px;
font-size: 24px;
letter-spacing: -1px;
max-width: 350px;
height: 65px;
border-radius: 32px;
color: #fff;
background:linear-gradient(180deg, rgba(0, 205, 194, 0.20131) 0%, rgba(50, 129, 250, 0.932385) 0.01%, #02CFC6 100%) ;
&:hover{
    opacity: 0.7;
    transition: 0.5s;
}
`
export const HanburguerButton =styled.button`
width: 50px;
height: 50px;
background-color: white;
border-radius: 12%;
border: none;
@media (min-width: 769px){
    display: none;
    color: purple;
}
@media (max-width: 768px){
    color: purple;
}
`
export const DivLeft = styled.div`
        width: 46.7%;
    height: 100%;
    animation: 2s ${fadeIn};
    display: flex;
    align-items:center ;
    justify-content: end;
    flex-wrap: wrap;
<<<<<<< HEAD
    @media(max-width: 700px){
    width: 100%;
    justify-content: center;
}
=======
    @media (max-width: 768px){
    width:90%;
    justify-content: center;
    align-items:center ;
    }

    
>>>>>>> ba9223232cb331a1cbc58c2005f211d61cc37d7b
`
export const DivRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
<<<<<<< HEAD
height: 100vh;
=======
height: 80%;


>>>>>>> ba9223232cb331a1cbc58c2005f211d61cc37d7b
`
export const T2 = styled.h2`
font-size: 50px;
line-height: 61px;
font-weight: 500;

`
export const ModalContainer = styled.div`
width: auto;
height: auto;
color: #fff;
font-size: 20px;
<<<<<<< HEAD
@media(max-width: 768px){
    width: 90%;
}
=======
@media (max-width: 768px){
    width:90%;
    justify-content: center;
    align-items:center ;
    }
>>>>>>> ba9223232cb331a1cbc58c2005f211d61cc37d7b
`
export const Paragrafo = styled.p`
font-size: 18px;
`