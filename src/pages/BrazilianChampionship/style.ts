import styled from "styled-components";

export const ContentBrazilianChampionship = styled.div `
    padding-bottom: 30px;

    h3 {
        margin: 2rem 0;
        font-size: 1.8em;
        background-color: ${props => props.theme.colors.background};
        font-weight: 400;
        text-transform: uppercase;
        padding: 8px;
        text-align: center;

        @media (max-width: 650px) {
            font-size: 1.3em;
        }
    }
    
`

export const TitleLogoBrazilianChampionship = styled.div `
    margin-top: 2rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    img {
        width: 100px;
    }
`

export const TitleStatusBrazilianChampionship = styled.div `
    flex: 1 1 210px;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    span {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
        padding: 4px 6px;
        border-radius: 10px;

        text-transform: uppercase;
        font-size: 10px;
        font-weight: 500;
    }
`

export const ContainerTableBrazilianChampionship = styled.div `
    width: 100%;
    overflow: auto;

    table {
        width: 100%;
        border-collapse: collapse;

        td {
            padding: 20px;
            border: 1px solid ${props => props.theme.colors.background};
        }

        thead {
            tr {
                background-color: ${props => props.theme.colors.background};
                font-weight: 500;
                font-size: 13pt;
            }
        }

        tbody {
            tr {
                &:nth-child(even) {
                    background-color: ${props => props.theme.colors.background};
                }
            }
        }
    }
`

export const WinBrazilianChampionship = styled.div `
    background-color: ${props => props.theme.colors.primary};
`

export const LossBrazilianChampionship = styled.div `
    background-color: red;
`

export const DrawBrazilianChampionship = styled.div `
    background-color: silver;
`

export const LastGamesBrazilianChampionship = styled.td `
    gap: 5px;

    min-width: 132px;
    width: 132px;

    div {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin: 0 3px;
    }
`