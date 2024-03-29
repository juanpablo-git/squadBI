import { Container, ContainerForm, ContainerText, Input } from "./styled";

export function     Formulario({opacity}) {
    return (
        <Container>
               
            <div style={{borderRadius:25,width:"80%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#323593",justifyContent:"center",marginTop:"60px",padding:20}}>
                <ContainerText opacity={opacity.mc3}>
                    <h1> Entre em contato com um de nossos especialistas e descruba como nós podemos ajudar a sua empresa.</h1>
                    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
                    <img style={{marginRight:3}} src="./linkedin.svg" height="20"/> <img style={{marginRight:3}} src="./instagram.png" height="20" /> <p>@squadBI</p> /  <img src="./envelope.png"  height="30"/> davimatiasfiusa@gmail.com.br
                    </div>
                </ContainerText>
                <ContainerForm opacity={opacity.mc3}>
                    <div style={{display:"flex",justifyContent:"center",width:"100%",flexWrap:"wrap"}}>

                        <Input placeholder="Nome" />
                        <Input style={{marginRight:"0"}}  placeholder="E-mail" />
                    </div>
                        <textarea style={{resize:"none"}} placeholder="escreva uma mensagem" cols="10" rows="10">
                        </textarea>
                        <button style={{marginTop:"20px",padding:5,borderColor:"transparent",borderBottom:"2px black solid"}}>Enviar</button>
                        
                </ContainerForm>
            </div>
        </Container>
    )
}