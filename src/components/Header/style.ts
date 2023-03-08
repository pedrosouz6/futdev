import styled from "styled-components";

export const ContainerHeader = styled.header `
    width: 100%;
    background-color: #31c078;
`

export const ContentHeader = styled.div `
    height: 70px;

    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    nav {
        ul {
            list-style: none;
            display: flex;
            gap: 1rem;

            li {
                a {
                    padding: 8px 12px;
                    font-weight: 500;
                    font-size: 1.1rem;
                    text-decoration: none;
                    color: white;
                    text-transform: uppercase;

                    transition: .3s ease-in-out ;

                    &:hover {
                        opacity: .8;
                    }
                }
            }
        }
    }
`