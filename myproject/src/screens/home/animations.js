import styled,{css,keyframes} from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const moveLeft = keyframes`
0%{
  transform: scale(0);
  margin-left: -50%;
}
100%{
  transform: scale(1);
  margin-left: 0%;
}
`
export const displayNone = keyframes`
0%{
  display: none;
}
100%{
  display: flex;
}
`

export const Teste = styled.button`
  animation: 1s ${fadeIn} ease-out;
`

