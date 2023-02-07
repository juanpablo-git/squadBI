import React from "react"
import { Container, ContainerTitle, DivText, Text } from "./styled"

export function DefinindoSaas({opacity}) {
    return (
        <Container opacity={opacity.mc2}>
             <DivText style={{marginLeft:"10%"}}>
            <Text>
            <h1>Oferecemos a nossa plataforma como serviço SaaS</h1>
            </Text>
        </DivText>
        <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
      
        <div style={{display:"flex",width:"80%"}}>
            
                
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


                {/* <img src="./Server.gif" height="310" /> */}
            </DivText>

        </div>
        </div>
        </Container>

    )

}