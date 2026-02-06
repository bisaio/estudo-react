import Button from "./eventos/Button";

export default function EventoClick() {
    function meuEvento() {
        console.log(`primeiro evento`);
    }

    function segundoEvento() {
        console.log("segundo evento");
        
    }

    return (
        <div>
            <p>Clique para disparar o evento do botão:</p>
            <Button text="Primeiro Evento" event={meuEvento}/>
            <Button text="Segundo Evento" event={segundoEvento}/>
        </div>
    )
}