import { Link } from "react-router-dom";

import { Container } from "../Container/style";
import { 
    ContainerHeader,
    ContentHeader
} from "./style";

export function Header() {
    return (
        <ContainerHeader>
            <Container>
                <ContentHeader>
                    <h1>Logo</h1>

                    <nav>
                        <ul>
                            <li><Link to='/campeonato-brasileiro'> CAMPEONATO BRASILEIRO </Link></li>
                            <li><Link to='/copa-do-brasil'> COPA DO BRASIL </Link></li>
                        </ul>
                    </nav>
                </ContentHeader>
            </Container>
        </ContainerHeader>
    )
}