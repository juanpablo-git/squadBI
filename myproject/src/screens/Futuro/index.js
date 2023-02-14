import { ModalFuturo } from "../PorqueSquadBI/styled";
import { Button, Modal, ModalContainerFuturo } from "./styled";

export default ()=>
<div style={{width:"100%",minHeight:"100vh",display:"flex",justifyContent:"center",height:"100vh",marginTop:100}}>
<ModalContainerFuturo opacity={1 } >

    <ModalFuturo  opacity={1 } >

        <p  style={{fontSize:"2rem",padding:20}}>Te desafiamos para o futuro</p>

        <p style={{fontWeight: 400,color:" #667085"}}>
        O Squad Bi é uma plataforma de Bi & Analitics inovadora que pretende levar a cultura de gestão inteligente para empresas.
        </p> 
        <Button style={{marginTop:25}}>Fale com um especialista</Button>
    </ModalFuturo>
    <Modal style={{marginLeft:"-20%",borderRadius:20}} ></Modal>

   
</ModalContainerFuturo> 
</div>