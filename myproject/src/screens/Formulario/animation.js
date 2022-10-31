import styled,{css,keyframes} from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Teste = styled.button`
  animation: 1s ${fadeIn} ease-out;
`

