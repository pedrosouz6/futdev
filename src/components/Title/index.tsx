import { TitleH1 } from "./style"

interface TitleProps {
    text: string
}

export function Title({ text }: TitleProps) {
    return (
        <TitleH1>{ text }</TitleH1>
    )
}