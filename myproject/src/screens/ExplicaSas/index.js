import React,{useRef} from "react"
import { Container, ContainerTitle, DivText, Text, ModalContainer, P1, P2, ContainerCard } from "./styled"

export function DefinindoSaas({ opacity }) {
    const cardContainer = useRef()
    return (
        <Container opacity={opacity.mc2}>
            <DivText style={{ marginLeft: "10%" }}>
                <Text>
                    <h1>Oferecemos a nossa plataforma como serviço SaaS</h1>
                </Text>
            </DivText>
            <div style={{display:"flex",justifyContent:"center",height:"71%"}}>
                <div style={{ display: "flex", flexWrap: "wrap", width: "80%"}}>
                    <div style={{ width: "100%" , display:"flex",flexWrap:"wrap"}}>

                        <DivText  >
                            <Text>
                                <ContainerTitle><h2>Entenda o serviço SaaS</h2></ContainerTitle>
                                Software como um serviço (SaaS), funciona como um provedor de serviços
                                que oferece softwares e aplicativos por meio da Internet.
                                Os usuários subscrevem ao software e o acessam por meio da web ou de
                                APIs do fabricante.
                            </Text>
                        </DivText>
                        <DivText >
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

                    <ContainerCard ref={cardContainer} opacity={opacity.mc2} >

                        <ModalContainer>
                            <DivText style={{width:"100%"}}>

                                <img src="./segurança.png" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Segurança</P1></ContainerTitle>
                                    <P2>Evite multas utilizando uma plataforma 100% aderente a Lei Geral de Proteção de dados (LGPD)</P2>
                                </Text>
                            </DivText>
                        </ModalContainer>

                        <ModalContainer>

                            <DivText style={{width:"100%"}}>
                                <img src="./agilite.png" style={{ width: "15rem",marginBottom: "-4rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Agilidade</P1></ContainerTitle>
                                    <P2>Crie fluxos de dados sem a necessidade de qualquer código, reduzindo muito o tempo operacional.</P2>
                                </Text>
                            </DivText>
                        </ModalContainer>

                        <ModalContainer>
                            <DivText style={{width:"100%"}}>
                                <img src="./pig.svg" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Economia</P1></ContainerTitle>
                                    <P2>Reduza os custos de TI da sua empresa, diminuindo a quantidade de horas dedicada a criação de relatórios de dados.
                                    </P2>
                                </Text>
                            </DivText>
                        </ModalContainer>
                        <ModalContainer>
                            <DivText style={{width:"100%"}}>
                                <img src="./notBook.svg" style={{ width: "15rem" }} />
                                <Text>
                                    <ContainerTitle><P1>Liberdade</P1></ContainerTitle>
                                    <P2> Reduza os custos de TI da sua empresa, diminuindo a quantidade de horas dedicada a criação de relatórios de dados.
                                    </P2>
                                </Text>

                            </DivText>
                        </ModalContainer>

                    </ContainerCard>
                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                            <button 
                                onClick={(e)=> cardContainer.current.scrollLeft-= cardContainer.current.offsetLeft}
                                style={{margin:10,padding:10,border:"transparent",borderRadius:"100%"}}>  <img src="./angulo-esquerdo.svg" style={{ height: "2rem" }} /></button>
                            <button
                                onClick={(e)=>{cardContainer.current.scrollLeft+= cardContainer.current.offsetLeft}}
                                style={{margin:10,padding:10,border:"transparent",borderRadius:"100%"}}><img src="./angulo-direito.svg" style={{ height: "2rem" }} /></button>
                        
                    </div>
                    


                </div>

            </div>
        </Container>


    )

}