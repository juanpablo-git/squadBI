import { Dl,Dt } from "../styled"
import { ContainerMenu } from "./styled"

export default ({display,setDysplayAbsoluteMenu})=>{
    return(
        <ContainerMenu display={display}>
        <button onClick={()=>setDysplayAbsoluteMenu(!display)} style={{position:"absolute",border:"none", backgroundColor:"transparent",color:"white",top:20,right:20}}>

            <img src="./cross.svg" width="20" />
         </button>
     

            <Dl>
                
                SOLUÇÕES
            </Dl>
            <Dl>
                VISÃO GERAL
                
            </Dl>
            <Dl>
                PRODUTOS
            </Dl>

            <Dl>
                PREÇOS
               
            </Dl>
           
   

        </ContainerMenu>
        )
}