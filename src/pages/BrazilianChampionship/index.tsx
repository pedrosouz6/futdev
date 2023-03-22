import { useQueries } from 'react-query';
import { Tooltip } from 'react-tooltip';

import { api } from '../../service/axios';
import { Header } from "../../components/Header";
import { Title } from "../../components/Title";
import { SkeletonScreen } from '../../components/SkeletonScreen';

import { Container } from "../../components/Container/style";

import { 
    ContentBrazilianChampionship,
    TitleLogoBrazilianChampionship,
    TitleStatusBrazilianChampionship,
    ContainerTableBrazilianChampionship,
    DrawBrazilianChampionship,
    LossBrazilianChampionship,
    WinBrazilianChampionship,
    LastGamesBrazilianChampionship
} from './style';

interface BrazilianChampionshipData {
    nome: string,
    nome_popular: string,
    status: string,
    tipo: string,
    logo: string,
    regiao: string,

    fase_atual: {
        nome: string
    },

    edicao_atual: {
        nome: string,
        nome_popular: string,
        temporada: number
    },
    rodada_atual: {
        nome: string,
        rodada: number,
    },
}

interface TableBrazilianChampionshipData {
    jogos: number,
    vitorias: number,
    empates: number,
    derrotas: number,
    gols_pro: number,
    gols_contra: number,
    saldo_gols: number,
    aproveitamento: number,
    posicao: number,
    pontos: number,
    ultimos_jogos: string[],
    time: {
        nome_popular: string,
        sigla: string,
        escudo: string
    }
}

export function BrazilianChampionship() {

    const results = useQueries([
        { queryKey: 'Campeonato Brasileiro', queryFn: async () => {
            const response = await api.get('campeonatos/10')
            const respost: BrazilianChampionshipData = await response.data;
            return respost;
        },
        staleTime: 99999999   
    },
        { queryKey: ['Tabela do Campeonato Brasileiro'], queryFn: async () => {
            const response = await api.get('campeonatos/10/tabela')
            const respost: TableBrazilianChampionshipData[] = await response.data;
            return respost;
        },
        staleTime: 99999999
    }
    ])


    return (
        <main>
            <Tooltip anchorSelect='.tooltip' />
            <Header />
            <Container>

                {
                    results[0].data ? 
                    <ContentBrazilianChampionship>
                        <TitleLogoBrazilianChampionship>
                            <img src={results[0].data?.logo} alt="Logo Campeonato Brasileiro" />

                            <TitleStatusBrazilianChampionship>
                                <Title 
                                    text={ 
                                        `${results[0].data.nome} 
                                        ${results[0].data.edicao_atual.temporada}`}
                                />

                                <span>{ results[0].data?.status }</span>
                            </TitleStatusBrazilianChampionship>
                        </TitleLogoBrazilianChampionship>

                        <h3>{ results[0].data?.fase_atual.nome }</h3>

                        <ContainerTableBrazilianChampionship>
                            <table>
                                <thead>
                                    <tr>
                                        <td className='tooltip' data-tooltip-content="Posição">POS</td>
                                        <td className='tooltip'>Time</td>
                                        <td className='tooltip' data-tooltip-content="Pontos">PTS</td>
                                        <td className='tooltip' data-tooltip-content="Jogos">J</td>
                                        <td className='tooltip' data-tooltip-content="Vitória">V</td>
                                        <td className='tooltip' data-tooltip-content="Empate">E</td>
                                        <td className='tooltip' data-tooltip-content="Derrota">D</td>
                                        <td className='tooltip' data-tooltip-content="Gols Pró">GP</td>
                                        <td className='tooltip' data-tooltip-content="Gols Contra">GC</td>
                                        <td className='tooltip' data-tooltip-content="Saldo de Gols">SG</td>
                                        <td className='tooltip' data-tooltip-content="Aproveitamento">%</td>
                                        <td className='tooltip'>Recentes</td>
                                    </tr>
                                </thead>

                                <tbody>
                                    { results[1].data?.map((item, key) => (
                                        <tr key={key}>
                                            <td>{ item.posicao }º</td>
                                            <td>{ item.time.nome_popular }</td>
                                            <td>{ item.pontos }</td>
                                            <td>{ item.jogos }</td>
                                            <td>{ item.vitorias }</td>
                                            <td>{ item.empates }</td>
                                            <td>{ item.derrotas }</td>
                                            <td>{ item.gols_pro }</td>
                                            <td>{ item.gols_contra }</td>
                                            <td>{ item.saldo_gols }</td>
                                            <td>{ item.aproveitamento }</td>
                                            <LastGamesBrazilianChampionship>
                                                { item.ultimos_jogos.map((item, key) => {
                                                    if(item === 'v') {
                                                        return <WinBrazilianChampionship key={key} className='tooltip' data-tooltip-content="Vitória" />
                                                    }

                                                    if(item === 'd') {
                                                        return <LossBrazilianChampionship key={key} className='tooltip' data-tooltip-content="Derrota" />
                                                    }

                                                    if(item === 'e') {
                                                        return <DrawBrazilianChampionship key={key} className='tooltip' data-tooltip-content="Empate" />
                                                    }
                                                })}
                                            </LastGamesBrazilianChampionship>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </ContainerTableBrazilianChampionship>
                    </ContentBrazilianChampionship>
                 : <SkeletonScreen />}

            </Container>
        </main>
    )
}