import { useState } from "react";

export default function Form() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    
    function cadastrarUsuario(e: React.SyntheticEvent) { // e = event
        e.preventDefault(); // para a exec do formulario (comportamento padrao do HTML) e faz o log
        console.log(name);
        console.log(`usuario: ${name} | senha: ${password}`);
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" style={{marginRight: 5}}>Nome</label>
                    <input id="name" name="name" type="text" placeholder="Digite seu nome" onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="password" style={{marginRight: 5}}>Senha</label>
                    <input id="password" name="password" type="password" placeholder="Digite sua senha" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}