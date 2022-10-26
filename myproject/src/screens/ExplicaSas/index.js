import React from "react"
import { Container, ContainerTitle, DivText, Text } from "./styled"

export function DefinindoSaas(params) {
    return (
        <Container>
            <DivText >

                <Text>
                 <h1>Utilizamos o que tem de melhor na computação em nuvem</h1>
                </Text>


                <Text>
                    <ContainerTitle><h2>Entenda o serviço SaaS</h2></ContainerTitle>
                    Software como um serviço (SaaS), funciona como um provedor de serviços
                    que oferece softwares e aplicativos por meio da Internet.
                    Os usuários subscrevem ao software e o acessam por meio da web ou de
                    APIs do fabricante.
                </Text>

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
            {/* imagem */}

           

            {/* texto */}
            <DivText>

                <img src="./Server.gif" height="310" />
            </DivText>
            <div>
            </div>

        </Container>

    )

}