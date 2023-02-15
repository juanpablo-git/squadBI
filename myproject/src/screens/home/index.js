import React,{useState} from "react";
import {Button1,Button2,HanburguerButton, Containeer, DivLeft,DivRight, Dl, Dt, Header1,Header2, ModalContainer, Paragrafo, T2, Ancora} from  "./styled"
import {Teste} from  "./animations"
import AbsoluteMenu from "./AbsoluteMenu";

export default function Home(){
const [displayAbsoluteMenu,setDysplayAbsoluteMenu] = useState(0)
    return( 
   <Containeer>
    <AbsoluteMenu setDysplayAbsoluteMenu={setDysplayAbsoluteMenu} display={displayAbsoluteMenu}/>
    <Header1>
    <Dl>
            <Dt>
            <img src="./Logo-Secundária-Degrade-Escuro.png" width="200" />
            </Dt>
            <Dt>
              <HanburguerButton onClick={()=>setDysplayAbsoluteMenu(!displayAbsoluteMenu)}><img src="./menu-hamburguer.svg" width="30"/></HanburguerButton>
            </Dt>
    </Dl>
    </Header1>
    <Header2 >
        <Dl>
            <Dt>
            <img src="./Logo-Secundária-Degrade-Escuro.png" width="200" />
            </Dt>
        </Dl>
        <Dl>

            <Dt>
                <Ancora  href="#solucoes">
                SOLUÇÕES
                </Ancora>
            </Dt>
            <Dt>
                <Ancora href="#visaoGeral">
                VISÃO GERAL
                </Ancora>
                
            </Dt>
            <Dt>
                <Ancora href="#cases">
                    CLIESTES
                </Ancora>
            </Dt>

            <Dt>
                <Ancora href="#servico">
                    SERVIÇO
                </Ancora>
            </Dt>
            <Dt>
                <Ancora href="#contato">
            <Button1>Fale com um especialista</Button1>
            </Ancora>
            </Dt>
        </Dl>

    </Header2>
    <div style={{
        display: 'flex',
        height:"85%",
    }}>
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
                <Ancora href="#contato">
                <Button2>Fale com um especialista</Button2>
                </Ancora>
            </ModalContainer>
        </DivLeft>
        <DivRight>
        <img src="./graphic.png" style={{
            width:"65%"
        }}/>
    


        </DivRight>
        </div>
        
       

       
   </Containeer>
        )
}