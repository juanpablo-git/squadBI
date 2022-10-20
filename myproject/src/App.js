
import React,{useEffect} from "react";
import {Container} from "./App.style"
import Home from "./screens/home";
import VisaoGeral from "./screens/visaoGeral";

function App() {
  useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      console.log(e)
    })
  })

  return (
    <Container   >
      <Home />
     
      <VisaoGeral  />
    </Container>
  );
}

export default App;
