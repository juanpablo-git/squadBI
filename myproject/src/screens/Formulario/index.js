import { Container, ContainerForm, ContainerText, ModalContainer } from "./styled";

export function Formulario({opacity}) {
    return (
        <Container>
            <ModalContainer>
                <ContainerText opacity={opacity.mc3}>
                    
                    <h1> Entre em contato com um de nossos especialistas e descruba como nós podemos ajudar a sua empresa.</h1>
                </ContainerText>

                <ContainerForm opacity={opacity.mc3}>
                    <div>
                        <input style={{marginBottom:10,marginRight:15}}  placeholder="nome" />
                        <input  placeholder="email" />
                    </div>
                        <textarea style={{resize:"none"}} placeholder="escreva uma mensagem" cols="10" rows="10">

                        </textarea>
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}