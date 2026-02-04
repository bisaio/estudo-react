interface PessoaProps {
    image: string,
    name: string,
    age: number,
    profession: string
}

export default function Pessoa({ image, name, age, profession }: PessoaProps) {
    return (
        <div>
            <img src={image} alt={name} />
            <h2>Nome: {name.toUpperCase()}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession.toUpperCase()}</p>
        </div>
    )
}