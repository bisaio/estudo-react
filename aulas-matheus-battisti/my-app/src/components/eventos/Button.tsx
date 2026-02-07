interface ButtonProps {
    text: string
    event: () => void
}

export default function Button(props: ButtonProps) {
    return <button onClick={props.event}>{props.text}</button>
}