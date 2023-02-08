import { useEffect, useState, useRef } from "react"
import { ModalFuturo } from "../PorqueSquadBI/styled"
import { Button, ButtonAngulo, Containeer, DivButton, DivTop, Dl, Dt, ListaDireita, ListaEsquerda, ModalContainer, ModalContainerButton, Paragrafo, T2, TituloContainer } from "./styled"
export default function VisaoGeral({ opacity }) {
    const containerLogos = useRef()
    return (
        <Containeer  >
            <DivTop>
                <TituloContainer style={{ marginBottom: 50 }} opacity={opacity.mc0} id="mc">
                    <T2>Empresas que utilizam  a SQUAD BI</T2>
                </TituloContainer>
                <div style={{ display: "flex",alignItems:"center", width: "80%"}}>
                    <ButtonAngulo opacity={opacity.mc0}
                     onClick={(e) => {
                        console.log(containerLogos.current)
                        containerLogos.current.scrollLeft -= containerLogos.current.offsetLeft

                    }}>
                        <img src="./angulo-esquerdo.svg" style={{ width: "100%", height: "100%" }} />
                    </ButtonAngulo>
                    <div ref={containerLogos} style={{ display: "flex",padding:10,  overflowX: "hidden", overflowY: "hidden",scrollBehavior:"smooth" }}>
                        {
                            ["./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png", "./Logo-Secundária-Degrade-Escuro.png"]
                                .map((iten,k) => {
                                    return (
                                        <ModalContainer opacity={opacity.mc0} >

                                            <div style={{ minWidth: "auto", width: "500px", padding: 10 }} >
                                               <img src="./Logo-Secundária-Degrade-Escuro.png" style={{ width: "100%", height: "100%" }} />
                                            </div>
                                        </ModalContainer>



                                    )

                                })
                        }
                    </div>
                    <ButtonAngulo opacity={opacity.mc0}
                    onClick={(e) => {
                        console.log(containerLogos.current)
                        containerLogos.current.scrollLeft += 150
                        // containerLogos.current.offsetLeft
                        
                        

                    }}><img src="./angulo-direito.svg" style={{ width: "100%", height: "100%" }} />
                    </ButtonAngulo>


                </div>


                {/* <div style={{minWidth:"auto",maxWidth:500}} >
                        <img src="./home1.png" style={{width:"100%"}}  />
                    </div> */}


                {/* <Paragrafo >
                            O Squad Bi é uma plataforma de Bi & Analitics inovadora que pretende levar a cultura de gestão inteligente para empresas.

                        </Paragrafo>
                        <Paragrafo>
                            Com o objetivo de gerar estratégias através de dados brutos em relatórios e dashboards e automatizar o compartilhamento deles entre a equipe.
                        </Paragrafo>
                        <Paragrafo>
                            Por lidar com informações sensiveis que serão o suporte dos negócios, a essência da plataforma precisou ser feita para comunicar confiança, credibilidade e inovação sem muita formalidade.
                        </Paragrafo> */}
            </DivTop>

            <DivButton>

                <ModalContainerButton opacity={opacity.mc1}>
                    <TituloContainer opacity={opacity.mc1}>
                        <T2 >Beneficios da SQUAD BI</T2>
                    </TituloContainer>

                    <ListaEsquerda>
                        <Dl>
                            <Dt>
                                <strong>–</strong> Proficionais Qualificados
                            </Dt>
                            <Dt>
                                <strong>–</strong> Para todo projeto utilizamos metodologia ágil.
                            </Dt>
                            <Dt>
                                <strong>–</strong> Plataforma é simples de usar
                            </Dt>
                            <Dt>
                                <strong>–</strong> Utilizamos o que há de mais atual em tecnologia para melhorar a performance e qualidade dos seus projetos.
                            </Dt>
                            <Dt>
                                <strong>–</strong> Conseguimos unir diversas fontes de dados em uma única ferramenta para gerar o seu Dashboard de maneira eficiente.
                                Suporte e Treinamento
                            </Dt>
                            <Dt>
                                <strong>–</strong>  Garantimos todo suporte e treinamento necessário após a finalização do seu projeto.
                            </Dt>
                        </Dl>

                    </ListaEsquerda>
                    <ListaDireita>
                        {/* <Dl> */}
                        <img src="./Design team(1).gif" height="300" />
                        {/* </Dl> */}


                    </ListaDireita>
                </ModalContainerButton>

            </DivButton>
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
            <div style={{width:"80%" ,display:"flex",justifyContent:"center",alignItems:"center",marginTop:100,marginBottom:100}}>
           
                <ModalFuturo >

                    <p  style={{fontSize:"2rem",padding:20}}>Te desafiamos para o futuro</p>

                    <p style={{fontWeight: 400,color:" #667085"}}>
                        A Squad BI tem o propósito de trilhar com a sua empresa o caminho até às nuvens. E além delas, por meio da tecnologia te ajudar a chegar ao topo.
                    </p> 
                    <Button style={{marginTop:25}}>Fale com um especialista</Button>
                </ModalFuturo>
                <div style={{marginLeft:"-20%"}} >
            <img src="./cubos.jpg" width={800} />
            </div>

               
            </div> 
            </div>
        

        </Containeer>
    )
}
