import { Link } from "react-router-dom";

import { Container } from "../Container/style";
import { 
    ContainerHeader,
    ContentHeader
} from "./style";

export function Header() {

    const path = window.location.pathname;

    return (
        <ContainerHeader>
            <Container>
                <ContentHeader>
                    <h1>Logo</h1>

                    <nav>
                        <ul>
                            <li 
                                className={
                                    path.includes('/campeonato-brasileiro') ? 
                                    'active' : 
                                    ''
                                } 
                            >
                                <Link to='/campeonato-brasileiro'> CAMPEONATO BRASILEIRO </Link>
                            </li>
                            
                            <li 
                                className={path.includes('/copa-do-brasil') ?
                                    'active' :
                                    ''
                                }
                            >
                                <Link to='/copa-do-brasil'> COPA DO BRASIL </Link>
                            </li>
                        </ul>
                    </nav>
                </ContentHeader>
            </Container>
        </ContainerHeader>
    )
}