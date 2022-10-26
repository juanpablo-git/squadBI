import React from "react";
import {Button1,Button2, Containeer, DivLeft,DivRight, Dl, Dt, Header, ModalContainer, Paragrafo, T2} from  "./styled"
import {Teste} from  "./animations"

export default function Home(){

    return( 
   <Containeer>
    <Header >
        <Dl>
            <Dt>
            <img src="./Logo-Secundária-Degrade-Escuro.png" width="200" />
            </Dt>
        </Dl>
        <Dl>

            <Dt>
                
                SOLUÇÕES
            </Dt>
            <Dt>
                VISÃO GERAL
                
            </Dt>
            <Dt>
                PRODUTOS
            </Dt>

            <Dt>
                PREÇOS
               
            </Dt>
            <Dt>
            <Button1>Fale com um especialista</Button1>
            </Dt>
        </Dl>

    </Header>
    <div style={{display:"flex"}}>
        <DivLeft>
            <ModalContainer>

                <T2>SQUAD BI</T2>
                <Paragrafo>
                Atenda aos requisitos empresariais mais exigentes.<br/>
                Mantenha a precisão, consistência e segurança dos dados<br/> 
                em tempo real em toda a sua organização com o Power BI.<br/>
                Usamos toda nossa experiência multidisciplinar para entregar<br/> 
                a melhor solução para nossos clientes, com impactos mais<br/> 
                eficientes no menor tempo possível.<br/>
                </Paragrafo>
                <br/>
                <Button2>Fale com um especialista</Button2>
            </ModalContainer>
        </DivLeft>

        <DivRight>
          
                <img   src="./Business Plan (2).gif" width="400"/>

        </DivRight>
    </div>
   </Containeer>
        )
}