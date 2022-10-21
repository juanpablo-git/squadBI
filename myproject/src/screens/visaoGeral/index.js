import React,{useEffect,useState} from "react"
import { Containeer, DivTop, ModalContainer, Paragrafo, T2, TituloContainer } from "./styled"
export default function VisaoGeral({scrol}){
    const [startAnimacao,setAnimacao] = useState(true)
    useEffect(()=>{
        const t = new IntersectionObserver((e)=>{
          console.log("Observando",e)
          if(e[0].isIntersecting){
            console.log(true)
            setAnimacao(true)
          }else{
            console.log(false)
            setAnimacao(true)
          }
        })
        t.observe(document.getElementById("p1"))
        // window.addEventListener('scroll',(e)=>{
        //   console.log(window.scrollY)
        // })
      },[])
      useEffect(()=>{

      },[startAnimacao])
    return(
        <Containeer >
            <DivTop>
               <TituloContainer>
                    <T2>Visão Geral</T2>
               </TituloContainer>
            <ModalContainer isIntersection={startAnimacao}>
            <img id="t2" src="./Vision statement.gif" width="380"/>
               
                <Paragrafo className="red-bg" isIntersection={startAnimacao} id="p1">
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