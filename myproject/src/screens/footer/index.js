import { Footer } from "./styled"
export function Foter() {
    return (
        <Footer style={{ background: "#1d3990" }}>

            <div >
                <div style={{ display: "flex", paddingTop: "50px", width: "100%", justifyContent: "center" }}>
                    <img src="./Logo-Secundária-Degrade-Escuro.png" width="15%" />
                </div>
                {/* <ul style={{ display: "flex", paddingTop: "15px", flexDirection: "row", justifyContent: "center", listStyle: "none", color: "#fff" }}>
                    <li style={{ margin: "10px" }}>
                        SOLUÇÕES
                    </li>
                    <li style={{ margin: "10px" }}>
                        VISÃO GERAL
                    </li>
                    <li style={{ margin: "10px" }}>
                        PRODUTOS
                    </li>
                    <li style={{ margin: "10px" }}>
                        PREÇOS
                    </li>
                </ul> */}

                <ul style={{ display: "flex", flexWrap:"wrap",paddingTop: "50px",paddingBottom:"50px", flexDirection: "row", justifyContent: "center", listStyle: "none", color: "#fff" }}>
                    <li style={{ margin: "10px" }}>
                        <div style={{display:"flex"}}>
                        <img src="./Group 12.svg" width="20" /> <p style={{marginLeft:"10px"}}>@squadbi</p>
                        </div>
                    </li>
                    <li style={{ margin: "10px" }}>
                        <div style={{display:"flex"}}>
                        <img src="./linkedin.svg" width="20" /> <p style={{marginLeft:"10px"}}>@squadbi</p>
                        </div>
                    </li>
                    <li style={{ margin: "10px" }}>
                        <div style={{display:"flex"}}>
                        <img src="./mail.svg" width="23"/> <p style={{marginLeft:"10px"}}>squadbi.contato@dominio.com</p>
                        </div>
                    </li>
                </ul>
            </div>
<<<<<<< HEAD
            <div style={{ display: "flex",width:"100%",justifyContent:"center" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "500px", height: "150px" }}>
                    <img src="./Logo-Secundária-Degrade-Escuro.png" width="70%" />
                </div>
                <div style={{width: "60%", justifyContent: "end", display: "flex" }}>
                    conteúdo
                </div>
            </div>

=======
>>>>>>> ba9223232cb331a1cbc58c2005f211d61cc37d7b
        </Footer>
    )
}