
import React,{useEffect,useState} from "react";
import {Container} from "./App.style"
import { DefinindoSaas } from "./screens/ExplicaSas";
import { Formulario } from "./screens/Formulario";
import Home from "./screens/home";
import { PorqueSquad } from "./screens/PorqueSquadBI";
import VisaoGeral from "./screens/visaoGeral";

function App() {
  const [opacity,setOpacity] = useState({
    mc0:0,
    mc1:0
  })
  
  window.document.addEventListener('scroll',(e)=>{
    
console.log(window.scrollY)
    if(window.scrollY < 400){
      setOpacity({
        mc0:0,
        mc1:0
      })
    }
    if(window.scrollY > 400 ){
        setOpacity({
          mc0:1,
          mc1:0
        })

    }

    if(window.scrollY > 675){
      
        setOpacity({
          mc0:1,
          mc1:1
        })
    }
      
    
 
})
  return (
    <Container   >
      <Home />
      <VisaoGeral opacity={opacity}  />
      {/* <PorqueSquad /> */}
      <DefinindoSaas />
      <Formulario />
    </Container>
  );
}

export default App;
