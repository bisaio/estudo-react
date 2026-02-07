interface ItemProps {
    marca?: string,
    ano_lancamento?: number
}

export default function Item({marca='N/A', ano_lancamento=0}: ItemProps) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}