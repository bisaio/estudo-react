interface RenderListProps {
    itens: Array<string>
}

export default function RenderList({ itens }: RenderListProps) {
    return (
        <>
            <h3>Lista renderizada:</h3>
            {
                itens.length > 0 ? (
                    itens.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                ) : (
                    <p>Lista vazia.</p>
                )
            }
        </>
    )
}