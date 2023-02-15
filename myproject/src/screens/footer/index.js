import { Ancora } from "../home/styled"
import { Footer } from "./styled"
export function Foter() {
    return (
        <Footer style={{ background: "#1d3990" }}>

            <div>
                <div style={{ display: "flex", paddingTop: "50px", width: "100%", justifyContent: "center" }}>
                    <img src="./Logo-Secundária-Degrade-Escuro.png" width="15%" />
                </div>
                <ul style={{ display: "flex", flexWrap: "wrap", paddingTop: "50px", paddingBottom: "50px", flexDirection: "row", justifyContent: "center", listStyle: "none", color: "#fff" }}>
                    <li style={{ margin: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <img src="./Group 12.svg" width="20" /> <p style={{ marginLeft: "10px" }}>@squadbi</p>
                        </div>
                    </li>
                    <li style={{ margin: "10px" }}>
                        <Ancora target="_blank" href="https://www.linkedin.com/company/gruposolanum/">
                        <div style={{ display: "flex" }}>
                            <img src="./linkedin.svg" width="20" /> <p style={{ marginLeft: "10px" }}>@squadbi</p>
                        </div>
                        </Ancora>
                    </li>
                    <li style={{ margin: "10px" }}>
                        <div style={{ display: "flex" }}>
                            <img src="./mail.svg" width="23" /> <p style={{ marginLeft: "10px" }}>squadbi.contato@dominio.com</p>
                        </div>
                    </li>
                </ul>
                <ul style={{ display: "flex", flexWrap: "wrap", paddingBottom: "50px", flexDirection: "row", justifyContent: "center", listStyle: "none", color: "#fff" }}>
                    &copy; 2020 Juan Pablo Sales
                </ul>
            </div>
        </Footer>
    )
}