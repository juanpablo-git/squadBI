import { useEffect, useState, useRef } from "react"
import { Containeer, DivButton, DivTop, Dl, Dt, ListaDireita, ListaEsquerda, ModalContainer, ModalContainerButton, Paragrafo, T2, TituloContainer } from "./styled"
export default function VisaoGeral({ opacity }) {
    return (
        <Containeer  >
            <DivTop>

                <ModalContainer opacity={opacity.mc0} >
                    <div >
                        <img src="./home1.png" width="500" />
                    </div>
                    <div style={{ minWidth: "400px", maxWidth: "500px" }} >
                        <TituloContainer opacity={opacity.mc0} id="mc">
                            <T2>Quem Somos</T2>
                        </TituloContainer>
                        <Paragrafo >
                            O Squad Bi é uma plataforma de Bi & Analitics inovadora que pretende levar a cultura de gestão inteligente para empresas.

                        </Paragrafo>
                        <Paragrafo>
                            Com o objetivo de gerar estratégias através de dados brutos em relatórios e dashboards e automatizar o compartilhamento deles entre a equipe.
                        </Paragrafo>
                        <Paragrafo>
                            Por lidar com informações sensiveis que serão o suporte dos negócios, a essência da plataforma precisou ser feita para comunicar confiança, credibilidade e inovação sem muita formalidade.
                        </Paragrafo>
                    </div>
                </ModalContainer>
            </DivTop>




            <DivButton>


                <TituloContainer opacity={opacity.mc1}>
                    <T2 style={{ color: "#000" }}>Porquê a Squad BI? </T2>
                </TituloContainer>


                <ModalContainerButton opacity={opacity.mc1}>
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

        </Containeer>
    )
}
