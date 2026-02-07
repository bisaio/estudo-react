import React from "react"

interface SeuNomeProps {
    onChangeNome: (value: string) => void
}

export default function SeuNome({ onChangeNome }: SeuNomeProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeNome(e.target.value)

    return (
        <div>
            <p>Digite seu nome:</p>
            <input type="text" onChange={handleChange} />
        </div>
    )
}