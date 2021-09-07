import { useState } from "react";
import styled from "styled-components"
import TextInput from "../components/TextInput/TextInput";
import PlantService from "../../sdk/services/Plant.service";
import { useHistory } from "react-router";

export default function PlantForm() {
    const [conta, setConta] = useState('')
    const [nome, setNome] = useState('')
    const [codigoPlanta, setCodigoPlanta] = useState('')
    const [token, setToken] = useState('')
    
    const history = useHistory();

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newPlant = {
            conta,
            nome,
            codigoPlanta,
            token
        }

        const plantResponse = await PlantService.insertNewPlant(newPlant)

        if (plantResponse) {
            history.goBack()
        }

    }

    return <Wrapper onSubmit={handleFormSubmit} >
        <Title>Crie uma planta nova</Title>
        <TextInput
            label="Nome da planta"
            value={nome}
            onChange={e => setNome(e.currentTarget.value)}
            required
        />
        <TextInput
            label="Informe sua conta"
            value={conta}
            onChange={e => setConta(e.currentTarget.value)}
            required
        />
        <TextInput
            label="Endereço da planta"
            value={codigoPlanta}
            onChange={e => setCodigoPlanta(e.currentTarget.value)}
            required
        />
        <TextInput
            label="Token"
            value={token}
            onChange={e => setToken(e.currentTarget.value)}
            required
        />
        <Button type="submit">Criar</Button>
    </Wrapper>
}

const Wrapper = styled.form`
    width: 750px;
    border: 1px solid rgba(26, 54, 126, 0.125);
    padding: 0 16px;
`

const Title = styled.h2`
    margin: 8px 0;
`

const Button = styled.button`
    color: #fff;
    background-color: #3f6ad8;
    border: none;
    padding: 6px 12px;
    text-transform: none;
    border-radius: .25rem;
    width: 20%;
    margin: 8px 0;
`