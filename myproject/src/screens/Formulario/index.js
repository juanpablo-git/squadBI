import { Container, ContainerForm, ContainerText, ModalContainer } from "./styled";

export function Formulario() {
    return (
        <Container>
            <ModalContainer>
                <ContainerText>
                    <h1> Entre em contato com um de nossos especialistas e descruba como nós podemos ajudar a sua empresa.
                    </h1>
                </ContainerText>
                <ContainerForm>
                    <div >
                        <input style={{ margin: 10 }} placeholder="Nome" />
                        <input style={{ margin: 10 }} placeholder="E-mail" />
                        <textarea style={{ margin: 10 }} cols="41" rows="10" placeholder="Digite sua mensagem">

                        </textarea>
                        <input type="submit" value="Enviar" />
                    </div>
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}