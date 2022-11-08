import {DivButton,Dl,Dt,ListaDireita,ListaEsquerda,ModalContainerButton,T2,TituloContainer} from "./styled"
export function PorqueSquad({opacity}){
    return(
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
    )
}