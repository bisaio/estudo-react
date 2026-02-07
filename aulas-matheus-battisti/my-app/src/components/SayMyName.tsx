interface SayMyNameProps {
    name: string;
}

export default function SayMyName(props: SayMyNameProps) {
    return (
        <div>
            <p>Fala {props.name.toUpperCase()}</p>
        </div>
    )
}