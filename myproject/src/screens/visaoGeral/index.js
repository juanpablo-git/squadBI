import { useEffect, useState } from "react"
import { Containeer, DivTop, ModalContainer, Paragrafo, T2, TituloContainer } from "./styled"
export default function VisaoGeral(){
    const [opacity,setOpacity] = useState(0)
    useEffect(()=>{
        window.document.addEventListener('scroll',(e)=>{
            // console.log(e)
            let elem = document.querySelector('#mc');
            let rect = elem.getBoundingClientRect();
            console.log(rect,rect.top,"leng")
            if(rect.top <= 220){
                setOpacity(1)
            }else{
                setOpacity(0)
            }
        })
       
    },[])
return(
        <Containeer onScroll={(e)=>console.log(e)}>
            <DivTop>
               <TituloContainer opacity={opacity}>
                  <T2>Visão Geral</T2>
               </TituloContainer>
            <ModalContainer opacity={opacity} id="mc">
            <img id="t2" src="./Vision statement.gif" width="380"/>
               
                <Paragrafo opacity={opacity} id="p1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Why do we use it?
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Paragrafo>
                </ModalContainer>
            </DivTop>
        </Containeer>
    )
}