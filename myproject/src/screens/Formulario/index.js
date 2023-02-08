import { Container, ContainerForm, ContainerText, Input, ModalContainer } from "./styled";

export function     Formulario({opacity}) {
    return (
        <Container>
               
            <ModalContainer >
                <ContainerText opacity={opacity.mc3}>
                    <h1> Entenda como a squad BI pode ajudar a sua empresa.</h1>
                </ContainerText>
                <ContainerText>
                Preencha o formulário de contato para falar com um de nossos especialistas <br/> 
                e se surpreenda com as poderosas funcionalidades da
                SQUAD BI
                </ContainerText>

                <ContainerForm style={{marginTop:30}} opacity={opacity.mc3}>
                    <div style={{display:"flex",justifyContent:"space-between",width:"100%",flexWrap:"wrap"}}>
                        <Input placeholder="Nome" />
                        <Input style={{marginRight:"0"}}  placeholder="E-mail" />
                    </div>
                        <textarea style={{resize:"none"}} placeholder="escreva uma mensagem" cols="10" rows="10">
                        </textarea>
                        <button style={{marginTop:"20px",padding:5,borderColor:"transparent",borderBottom:"2px black solid"}}>Enviar</button>
                        
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}