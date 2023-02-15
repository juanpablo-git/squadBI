import { CaseContainer, ContainerCard, ContainerTitle, DivText, ModalContainer, P1, P2, Text } from "./styled"

export default ({ opacity }) =>
    <CaseContainer id="cases" opacity={opacity.cases} >
        <div style={{ width: "80%", }} >

            <DivText  >
                <Text>
                    <ContainerTitle><h2 style={{
                        fontWeight: 300,
                        fontSize: "xx-large"
                    }}>Veja como as empresas estão utilizando a solução SaaS da SQUADBI</h2></ContainerTitle>
                </Text>
            </DivText>

        </div>

        <ContainerCard opacity={opacity.cases} >

            <ModalContainer>
                <DivText style={{ width: "100%" }}>

                    <img src="./segurança.png" style={{ width: "15rem" }} />
                    <Text>
                        <ContainerTitle><P1>Segurança</P1></ContainerTitle>
                        <P2>Evite multas utilizando uma plataforma 100% aderente a Lei Geral de Proteção de dados (LGPD)</P2>
                    </Text>
                </DivText>
            </ModalContainer>

            <ModalContainer>

                <DivText style={{ width: "100%" }}>
                    <img src="./agilite.png" style={{ width: "15rem", marginBottom: "-4rem" }} />
                    <Text>
                        <ContainerTitle><P1>Agilidade</P1></ContainerTitle>
                        <P2>Crie fluxos de dados sem a necessidade de qualquer código, reduzindo muito o tempo operacional.</P2>
                    </Text>
                </DivText>
            </ModalContainer>

            <ModalContainer>
                <DivText style={{ width: "100%" }}>
                    <img src="./pig.svg" style={{ width: "15rem" }} />
                    <Text>
                        <ContainerTitle><P1>Economia</P1></ContainerTitle>
                        <P2>Reduza os custos de TI da sua empresa, diminuindo a quantidade de horas dedicada a criação de relatórios de dados.
                        </P2>
                    </Text>
                </DivText>
            </ModalContainer>
            <ModalContainer>
                <DivText style={{ width: "100%" }}>
                    <img src="./notBook.svg" style={{ width: "15rem" }} />
                    <Text>
                        <ContainerTitle><P1>Liberdade</P1></ContainerTitle>
                        <P2> Reduza os custos de TI da sua empresa, diminuindo a quantidade de horas dedicada a criação de relatórios de dados.
                        </P2>
                    </Text>

                </DivText>
            </ModalContainer>

        </ContainerCard>
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <button
                onClick={(e) => { }}
                style={{ margin: 10, padding: 10, border: "transparent", borderRadius: "100%" }}>  <img src="./angulo-esquerdo.svg" style={{ height: "2rem" }} /></button>
            <button
                onClick={(e) => { }}
                style={{ margin: 10, padding: 10, border: "transparent", borderRadius: "100%" }}><img src="./angulo-direito.svg" style={{ height: "2rem" }} /></button>

        </div>
    </CaseContainer>