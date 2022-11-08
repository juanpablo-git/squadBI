import { Footer } from "./styled"
export function Foter() {
    return (
        <Footer style={{ background: "#1d3990" }}>
            <div >
                <ul style={{ display: "flex", flexDirection: "row", justifyContent: "center", listStyle: "none", color: "#fff" }}>
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
                </ul>
            </div>
            <div style={{ display: "flex",width:"100%",justifyContent:"center" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "500px", height: "150px" }}>
                    <img src="./Logo-Secundária-Degrade-Escuro.png" width="70%" />
                </div>
                <div style={{width: "60%", justifyContent: "end", display: "flex" }}>
                    conteúdo
                </div>
            </div>

        </Footer>
    )
}