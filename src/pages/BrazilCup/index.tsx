import { useQueries } from "react-query";
import { api } from "../../service/axios";

import { Header } from "../../components/Header";
import { Container } from "../../components/Container/style";
import { Title } from "../../components/Title";

import { 
    ContentBrazilCup,
    TitleLogoBrazilCup,
    TitleStatusBrazilCup
} from "./style";

interface BrazilCupData {
    logo: string,
    status: string,

    campeonato: {
        tipo: string,
        regiao: string,
    },
    edicao_atual: {
        temporada: string,
        nome: string,
    },
    fases: {
        nome: string,
        eliminatorio: boolean,
        ida_e_volta: boolean,

        proxima_fase: {
            _link: string
        },
        fase_anterior: {
            _link: string
        }
    }[]
}

export function BrazilCup() {

    const results = useQueries([
        { 
            queryKey: 'Copa do Brasil', 
            queryFn: async () => {
                const response = await api.get('campeonatos/2')
                const respost: BrazilCupData = await response.data;
                return respost;
            },
            staleTime: 6000000
        }
    ])

    console.log(results);

    return (
        <main>
            <Header />
            <Container>

                <ContentBrazilCup>
                    <TitleLogoBrazilCup>
                        <img src={results[0].data?.logo} alt="" />
                        
                        <TitleStatusBrazilCup>
                            <Title text={results[0].data ? results[0].data.edicao_atual.nome : ''} />
                            
                            <span>{ results[0].data?.status }</span>
                        </TitleStatusBrazilCup>
                    </TitleLogoBrazilCup>

                    <h3>{ results[0].data?.fases[0].nome }</h3>

                </ContentBrazilCup>


            </Container>
        </main>
    )
}