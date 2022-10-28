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
                        <input style={{ margin: 10,outline:'none',border:"none"}} placeholder="Nome" />
                        <input style={{ margin: 10,outline:'none',border:"none" }} placeholder="E-mail" />
                        <textarea style={{ margin: 10 ,outline:'none',border:"none"}} cols="35" rows="10" placeholder="Digite sua mensagem">

                        </textarea>
                        <div>

                        <input style={{ margin: 10 ,outline:'none',border:"none",fontSize:20,paddingLeft:10,paddingRight:10}}  type="submit" value="Enviar" />
                        </div>
                    </div>
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}