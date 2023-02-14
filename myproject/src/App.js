
import React, { useEffect, useState } from "react";
import { Container } from "./App.style"
import Cases from "./screens/Cases";
import { DefinindoSaas } from "./screens/ExplicaSas";
import { Foter } from "./screens/footer/index";
import { Formulario } from "./screens/Formulario";
import Futuro from "./screens/Futuro";
import Home from "./screens/home";
import { PorqueSquad } from "./screens/PorqueSquadBI";
import Produtos from "./screens/Produtos";
import VisaoGeral from "./screens/visaoGeral";

function App() {
  const [opacity, setOpacity] = useState({
    mc0: 0,
    mc1: 0,
    mc2: 0,
    mc3: 0,
    cases: 0,
    modalFuturo: 0
  })

  window.document.addEventListener('scroll', (e) => {
    console.log(window.scrollY)

    if (window.scrollY < 400) {
      setOpacity({
        mc0: 1,
        mc1: 0,
        mc2: 0,
        modalFuturo: 0,
        cases: 0,
        mc3: 0
      })
    }
    if (window.scrollY > 400) {
      setOpacity({
        mc0: 1,
        mc1: 1,
        mc2: 0,
        modalFuturo: 0,
        cases: 0,
        mc3: 0
      })

    }

    if (window.scrollY > 1400) {

      setOpacity({
        mc0: 1,
        mc1: 1,
        mc2: 1,
        cases: 0,
        modalFuturo: 0,
        mc3: 1
      })
    }
    if (window.scrollY > 1900) {
      setOpacity({
        mc0: 1,
        mc1: 1,
        modalFuturo: 1,
        cases: 0,
        mc2: 1,
        mc3: 0,
      })
    }

    if (window.scrollY > 2300) {
      setOpacity({
        mc0: 1,
        mc1: 1,
        modalFuturo: 1,
        cases: 1,
        mc2: 1,
        mc3: 1
      })

    }
    if (window.scrollY > 2700) {
      setOpacity({
        mc0: 1,
        mc1: 1,
        mc2: 1,
        modalFuturo: 1,
        cases: 1,
        mc3: 1,
      })
    }







  })
  return (
    <Container   >
      <Home />
      <VisaoGeral opacity={opacity} />
      <DefinindoSaas opacity={opacity} />
      <Cases opacity={opacity} />
      <Futuro opacity={opacity} />
      <Produtos opacity={opacity} />
      <Formulario opacity={opacity} />
      <Foter />
    </Container>
  );
}

export default App;
