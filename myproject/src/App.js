
import React,{useEffect,useState} from "react";
import {Container} from "./App.style"
import Home from "./screens/home";
import VisaoGeral from "./screens/visaoGeral";

function App() {
  const [scrol,setScrol] = useState(window.scrollY)
  useEffect(()=>{
    const t = new IntersectionObserver((e)=>{
      console.log("Observando",e)
    })
    t.observe(document.getElementById("p1"))
    // window.addEventListener('scroll',(e)=>{
    //   console.log(window.scrollY)
    // })
  },[])

  return (
    <Container   >
      <Home />
      <VisaoGeral   />
    </Container>
  );
}

export default App;
