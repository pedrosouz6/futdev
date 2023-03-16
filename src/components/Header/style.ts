import styled from "styled-components";

export const ContainerHeader = styled.header `
    width: 100%;
    background-color: ${props => props.theme.colors.primary};
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
            gap: 2rem;

            .active {
                a { 
                    &::before,
                    &::after {
                        content: '';
                        display: block;
                        width: 100%;
                        height: 2px;
                        background-color: white;
                        position: absolute;
                        bottom: 0;
    
                    }
                }
            }

            li {
                a {
                    position: relative;
                    padding: 8px 1px;
                    font-weight: 500;
                    font-size: 1.1rem;
                    text-decoration: none;
                    color: white;
                    text-transform: uppercase;

                    transition: .3s ease-in-out ;

                    &:hover {

                        &::before,
                        &::after {
                            content: '';
                            display: block;
                            width: 100%;
                            height: 2px;
                            background-color: white;
                            position: absolute;
                            bottom: 0;

                            animation: underlineAnimation .5s linear;
                        }

                        &::before {
                            right: 0;
                        }

                        &::after {
                            left: 0;
                        }
                    }

                    @keyframes underlineAnimation {
                        0% {
                            width: 0;
                        }

                        100% {
                            width: 100%;
                        }    
                    }
                }
            }
        }
    }
`