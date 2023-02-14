
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
    home: 0,
    defineSAAS: 0,
    formulario: 0,
    cases: 0,
    modalFuturo: 0,
    produto:0
  })

  window.document.addEventListener('scroll', (e) => {
    console.log(window.scrollY)

    if (window.scrollY < 400) {
      setOpacity({
        mc0: 0,
        home: 0,
        defineSAAS: 0,
        modalFuturo: 0,
        cases: 0,
        produto:0,
        formulario: 0
      })
    }
    if (window.scrollY > 400) {
      setOpacity({
        mc0: 1,
        home: 1,
        defineSAAS: 0,
        modalFuturo: 0,
        cases: 0,
        produto:0,
        formulario: 0
      })

    }

    if (window.scrollY > 1253) {

      setOpacity({
        mc0: 1,
        home: 1,
        defineSAAS: 1,
        formulario: 0,
        cases: 0,
        produto:0,
        modalFuturo: 0,

      })
    }
    if (window.scrollY > 1900) {
      setOpacity({
        mc0: 1,
        home: 1,
        modalFuturo: 0,
        cases: 0,
        produto:0,
        defineSAAS: 1,
        formulario: 0,
      })
    }

    if (window.scrollY > 2100) {
      setOpacity({
        mc0: 1,
        home: 1,
        modalFuturo: 0,
        cases: 1,
        produto:0,
        defineSAAS: 1,
        formulario: 1
      })

    }
    if (window.scrollY > 2800) {
      setOpacity({
        mc0: 1,
        home: 1,
        defineSAAS: 1,
        modalFuturo: 1,
        cases: 1,
        produto:0,
        formulario: 1,
      })
    }
    if (window.scrollY > 3700) {
      setOpacity({
        mc0: 1,
        home: 1,
        defineSAAS: 1,
        modalFuturo: 1,
        cases: 1,
        produto:1,
        formulario: 0,
      })
    }
    if (window.scrollY > 4457) {
      setOpacity({
        mc0: 1,
        home: 1,
        defineSAAS: 1,
        modalFuturo: 1,
        cases: 1,
        produto:1,
        formulario: 1,
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
