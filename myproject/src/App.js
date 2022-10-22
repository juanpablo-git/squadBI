
import React,{useEffect,useState} from "react";
import {Container} from "./App.style"
import { DefinindoSaas } from "./screens/ExplicaSas";
import Home from "./screens/home";
import VisaoGeral from "./screens/visaoGeral";

function App() {
  const [opacity,setOpacity] = useState(0)
  window.document.addEventListener('scroll',(e)=>{
      
   
    let elem = document.querySelector('#mc');
    let rect = elem.getBoundingClientRect();
    if(rect.top < 450){
        setOpacity(1)
    }else{
        setOpacity(0)
    }
})
  return (
    <Container   >
      <Home />
      <VisaoGeral opacity={opacity}  />
      <DefinindoSaas />
    </Container>
  );
}

export default App;
