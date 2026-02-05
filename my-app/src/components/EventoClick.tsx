interface EventoClickProps {
    numero: number;
}

export default function EventoClick({ numero }: EventoClickProps) {
    function meuEvento() {
        console.log(`clique no botao: ${numero}`);
    }

    return (
        <div>
            <p>Clique para disparar o evento do botão {numero}:</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}