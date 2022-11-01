
import React,{useEffect,useState} from "react";
import {Container} from "./App.style"
import { DefinindoSaas } from "./screens/ExplicaSas";
import { Foter } from "./screens/footer/index";
import { Formulario } from "./screens/Formulario";
import Home from "./screens/home";
import { PorqueSquad } from "./screens/PorqueSquadBI";
import VisaoGeral from "./screens/visaoGeral";

function App() {
  const [opacity,setOpacity] = useState({
    mc0:0,
    mc1:0,
    mc2:0,
    mc3:0
  })
  
  window.document.addEventListener('scroll',(e)=>{
    
console.log(window.scrollY)
    if(window.scrollY < 400){
      setOpacity({
        mc0:0,
        mc1:0,
        mc2:0,
        mc3:0
      })
    }
    if(window.scrollY > 400 ){
        setOpacity({
          mc0:1,
          mc1:0,
          mc2:0,
          mc3:0
        })

    }

    if(window.scrollY > 675){
      
        setOpacity({
          mc0:1,
          mc1:1,
          mc2:0,
          mc3:0
        })
    }
    if(window.scrollY > 1450){
      setOpacity({
        mc0:1,
        mc1:1,
        mc2:1,
        mc3:0
      })
      if(window.scrollY > 1774){
        setOpacity({
          mc0:1,
          mc1:1,
          mc2:1,
          mc3:1
        })
      }
    }
      
    
 
})
  return (
    <Container   >
      <Home />
      <VisaoGeral opacity={opacity}  />
      <DefinindoSaas opacity={opacity} />
      <Formulario opacity={opacity} />
      <Foter/>
    </Container>
  );
}

export default App;
