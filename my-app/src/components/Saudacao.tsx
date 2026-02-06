interface SaudacaoProps {
    nome: string
}

export default function Saudacao({nome} : SaudacaoProps) {
 
    function gerarSaudacao(nome: string) { 
        return nome ? `Olá, ${nome}, tudo bem?` : `Olá, digite seu nome.`
    }
    
    return <><p>{gerarSaudacao(nome)}</p></>
}