export default function Form() {
    function cadastrarUsuario(e: React.SyntheticEvent) { // e = event
        e.preventDefault(); // para a exec do formulario (comportamento padrao do HTML) e faz o log
        console.log("usuario cadastrado");   
    }

    return (
        <div>
            <h1>Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}