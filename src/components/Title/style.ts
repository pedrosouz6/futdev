import styled from "styled-components";

export const TitleH1 = styled.h1 `
    color: ${props => props.theme.colors.black};
    font-size: 2.6rem;
    font-weight: 500;

    @media (max-width: 760px) {
        font-size: 2rem;
    }

    @media (max-width: 400px) {
        font-size: 1.5em;
    }
`