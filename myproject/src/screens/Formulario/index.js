import { Container, ContainerForm, ContainerText, ModalContainer } from "./styled";

export function Formulario() {
    return (
        <Container>
            <ModalContainer>
                <ContainerText >
                    <h1> Entre em contato com um de nossos especialistas e descruba como nós podemos ajudar a sua empresa.</h1>
                </ContainerText>
                <ContainerForm>
                    <form >
                        <input  placeholder="Nome" />
                        <input  placeholder="E-mail" />
                        <textarea cols="41" rows="10" placeholder="Digite sua mensagem">

                        </textarea>
                        <input type="submit" value="Enviar" />
                    </form>
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}