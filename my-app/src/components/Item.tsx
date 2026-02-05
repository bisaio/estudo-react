interface ItemProps {
    marca: string
}

export default function Item(props: ItemProps) {
    return (
        <>
            <li>{props.marca}</li>
        </>
    )
}