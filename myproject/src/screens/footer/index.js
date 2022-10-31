import { Footer } from "./styled"
export function Foter() {
    return (
        <Footer style={{ background: "linear-gradient(89.78deg, rgba(0, 207, 199, 0.932385) -6.27%, rgba(62, 108, 255, 0.64) 49.05%, #4444FF 104.36%, rgba(245, 245, 245, 0.29) 104.38%)" }}>
            <div>
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
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "500px", height: "150px" }}>
                    <img src="./Logo-Secundária-Degrade-Escuro.png" width="400px" />
                </div>
                <div style={{ width: "60%", justifyContent: "end", display: "flex" }}>
                    conteúdo
                </div>
                <div style={{ width: "200px" }}>

                </div>
            </div>

        </Footer>
    )
}