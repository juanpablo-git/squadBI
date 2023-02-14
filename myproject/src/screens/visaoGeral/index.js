import { useEffect, useState, useRef } from "react"
import { ModalFuturo } from "../PorqueSquadBI/styled"
import { Button, ButtonAngulo, Containeer, ContainersLogos, DivButton, DivTop, Dl, Dt, ListaDireita, ListaEsquerda, Modal, ModalContainer, ModalContainerButton, ModalContainerFuturo, Paragrafo, T2, TituloContainer } from "./styled"
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
                        <img src="./angulo-esquerdo.svg" style={{ width: "2rem", height: "2rem" }} />
                    </ButtonAngulo>
                    <ContainersLogos opacity={opacity.mc0} ref={containerLogos} >
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
                    </ContainersLogos>
                    <ButtonAngulo opacity={opacity.mc0}
                    onClick={(e) => {
                        console.log(containerLogos.current)
                        containerLogos.current.scrollLeft += 150
                        // containerLogos.current.offsetLeft
                        
                        

                    }}><img src="./angulo-direito.svg" style={{ width: "2rem", height: "2rem" }} />
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

                <ModalContainerButton opacity={opacity.home}>
                    <TituloContainer opacity={opacity.home}>
                        <T2 >Beneficios da SQUAD BI</T2>
                    </TituloContainer>
                    <di style={{padding:20,display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>

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
                            {/* <img src="./Design team(1).gif" height="300" /> */}


                        </ListaDireita>
                    </di>
                </ModalContainerButton>

            </DivButton>
     
        

        </Containeer>
    )
}
