import { Container, ContainerForm, ContainerText, Input, ModalContainer } from "./styled";

export function     Formulario({opacity}) {
    return (
        <Container>
               
            <ModalContainer opacity={opacity.mc3}>
                <div style={{width:"50%"}}>
                <ContainerText opacity={opacity.mc3}>
                    <h1> Entenda como a squad BI pode ajudar a sua empresa.</h1>
                </ContainerText>
                <ContainerText>
                Preencha o formulário de contato para falar com um de nossos especialistas <br/> 
                e se surpreenda com as poderosas funcionalidades da
                SQUAD BI
                </ContainerText>
                {/* <img src="./Email campaign-amico.png" height="200rem" /> */}
                </div>

                <ContainerForm style={{marginTop:30}} opacity={opacity.mc3}>
                    <div style={{display:"flex",justifyContent:"space-between",width:"100%",flexWrap:"wrap"}}>
                        <Input placeholder="Nome" />
                        <Input style={{marginRight:"0"}}  placeholder="E-mail" />
                    </div>
                        <textarea style={{resize:"none",borderRadius:10,border:"none",outline:"none",padding:"15px 10px"}} placeholder="escreva uma mensagem" cols="10" rows="10">
                        </textarea>
                        <button style={{marginTop:"20px",border:"none", padding:5,borderRadius:5}}>Enviar</button>
                        
                </ContainerForm>
            </ModalContainer>
        </Container>
    )
}