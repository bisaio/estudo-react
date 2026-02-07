import { useState } from "react";

export default function RenderizacaoCondicional() {

    const [email, setEmail] = useState("");
    const [userEmail, setUserEmail] = useState("")

    function enviarEmail(e: React.SyntheticEvent) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail(e: React.SyntheticEvent) {
        e.preventDefault();
        setUserEmail("");
    }

    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => {setEmail(e.target.value)}}/>
                <button onClick={enviarEmail}>Enviar</button>
            </form>

            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}