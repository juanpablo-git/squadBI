import { useEffect, useState, useRef } from "react"
import { Containeer, DivButton, DivTop, Dl, Dt, ListaDireita, ListaEsquerda, ModalContainer, ModalContainerButton, Paragrafo, T2, TituloContainer } from "./styled"
export default function VisaoGeral({ opacity }) {
    return (
        <Containeer  >
            <DivTop>
                <TituloContainer opacity={opacity} id="mc">
                    <T2>Visão Geral</T2>
                </TituloContainer>
                <ModalContainer opacity={opacity} >
                    <img id="t2" src="./Vision statement.gif" width="380" />

                    <Paragrafo  id="p1">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        <br />
                        <br />
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Paragrafo>
                </ModalContainer>
            </DivTop>




            <DivButton>


                <TituloContainer opacity={opacity}>
                    <T2 style={{ color: "#f2f4f7" }}>Porquê a SquadBI? </T2>
                </TituloContainer>


                <ModalContainerButton opacity={opacity}>
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
                        </Dl>
                    </ListaEsquerda>
                    <ListaDireita>
                        <Dl>
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
                    </ListaDireita>
                </ModalContainerButton>

            </DivButton>

        </Containeer>
    )
}
