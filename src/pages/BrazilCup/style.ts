import styled from "styled-components";

export const ContentBrazilCup = styled.div `
    h3 {
        text-align: center;
    }
`

export const TitleLogoBrazilCup = styled.div `
    margin-top: 2rem;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    img {
        width: 100px;
    }
`

export const TitleStatusBrazilCup = styled.div `
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