import React from "react"
import { Container, ContainerTitle, DivText, Text, ModalContainer, P1, P2 } from "./styled"

export function DefinindoSaas({ opacity }) {
    return (
        <Container opacity={opacity.mc2}>
            <DivText style={{ marginLeft: "10%" }}>
                <Text>
                    <h1>Oferecemos a nossa plataforma como serviço SaaS</h1>
                </Text>
            </DivText>
            <div style={{display:"flex",justifyContent:"center"}}>
                <div style={{ display: "flex", flexWrap: "wrap", width: "80%" }}>
                    <div style={{ width: "37%" }}>

                        <DivText  >
                            <Text>
                                <ContainerTitle><h2>Entenda o serviço SaaS</h2></ContainerTitle>
                                Software como um serviço (SaaS), funciona como um provedor de serviços
                                que oferece softwares e aplicativos por meio da Internet.
                                Os usuários subscrevem ao software e o acessam por meio da web ou de
                                APIs do fabricante.
                            </Text>
                        </DivText>
                        {/* imagem */}



                        {/* texto */}
                        <DivText>
                            <Text>
                                <ContainerTitle><h2>Vantagens do SaaS</h2></ContainerTitle>
                                Os principais diferenciais desse modelo de nuvem são
                                a escalabilidade e a praticidade.
                                Afinal, todos os processos relativos aos custos da compra do
                                software e do servidor — além da implementação — são
                                eliminados,visto que serviço está disponível a um clique de
                                distância.
                            </Text>
                        </DivText>

                    </div>

                    <div style={{ width: "63%",display:"flex",flexWrap:"wrap" }}>

                        <ModalContainer>
                            <DivText>

                                <img src="./segurança.png" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Segurança</P1></ContainerTitle>
                                    <P2>Evite multas utilizando uma plataforma 100% aderente a Lei Geral de Proteção de dados (LGPD)</P2>
                                </Text>
                            </DivText>
                        </ModalContainer>

                        <ModalContainer>

                            <DivText>
                                <img src="./agilite.png" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Agilidade</P1></ContainerTitle>
                                    <P2>Crie fluxos de dados sem a necessidade de qualquer código, reduzindo muito o tempo operacional.</P2>
                                </Text>
                            </DivText>
                        </ModalContainer>

                        <ModalContainer>
                            <DivText>
                                <img src="./pig.svg" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Economia</P1></ContainerTitle>
                                    <P2>Reduza os custos de TI da sua empresa, diminuindo a quantidade de horas dedicada a criação de relatórios de dados.
                                    </P2>
                                </Text>
                            </DivText>
                        </ModalContainer>
                        <ModalContainer>
                            <DivText>
                                <img src="./pig.svg" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Liberdade</P1></ContainerTitle>
                                    <P2> Reduza os custos de TI da sua empresa, diminuindo a quantidade de horas dedicada a criação de relatórios de dados.
                                    </P2>
                                </Text>



                                {/* <img src="./Server.gif" height="310" /> */}
                            </DivText>
                        </ModalContainer>

                    </div>

                </div>

            </div>
        </Container>


    )

}