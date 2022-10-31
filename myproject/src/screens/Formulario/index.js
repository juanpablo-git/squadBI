import { Container, ContainerForm, ContainerText, ModalContainer } from "./styled";

export function Formulario({opacity}) {
    return (
        <Container>
            <ModalContainer>
                <ContainerText opacity={opacity.mc3}>
                    
                    <h1> Entre em contato com um de nossos especialistas e descruba como nós podemos ajudar a sua empresa.</h1>
                </ContainerText>
                <ContainerForm>
                    <div >
                        <input style={{ margin: 10,outline:'none',border:"none"}} placeholder="Nome" />
                        <input style={{ margin: 10,outline:'none',border:"none" }} placeholder="E-mail" />
                    </div>
                        <textarea style={{resize:"none"}} placeholder="escreva uma mensagem" cols="10" rows="10">
                        </textarea>
                        
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}