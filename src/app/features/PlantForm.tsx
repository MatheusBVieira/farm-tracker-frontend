import { useState } from "react";
import info from "../../core/utils/info"
import styled from "styled-components"
import UserService from "../../sdk/services/User.service";

export default function PlantForm() {
    const [conta, setConta] = useState('')
    const [nome, setNome] = useState('')
    const [endereco, setEndereco] = useState('')

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newPlant = {
            conta,
            nome,
        }

        await UserService.insertNewPlant(newPlant, endereco)

        info({
            title: 'Planta salva com sucesso',
            description: 'Você acabou de criar a planta'
        })
    }


    return <Wrapper onSubmit={handleFormSubmit} >
        <Title>Crie uma planta nova</Title>
        <TextInput>
            <span>Nome da planta</span>
            <input onChange={e => setNome(e.currentTarget.value)} required></input>
        </TextInput>
        <TextInput>
            <span>Informe sua conta</span>
            <input onChange={e => setConta(e.currentTarget.value)} required></input>
        </TextInput>
        <TextInput>
            <span>Endereço da planta</span>
            <input onChange={e => setEndereco(e.currentTarget.value)} required></input>
        </TextInput>
        <Button type="submit">Criar</Button>
    </Wrapper>
}

const Wrapper = styled.form`
    width: 750px;
    height: 350px;
    border: 1px solid rgba(26, 54, 126, 0.125);
    padding: 0 16px;
`

const Title = styled.h2`
    margin: 8px 0;
`

const TextInput = styled.div`
    display: flex;
    flex-direction: column;

    span {
        margin: 8px 0;
    }
    
    input {
        padding: 4px;
        font-size: 18px;
        margin-bottom: 8px;
    }
`

const Button = styled.button`
    color: #fff;
    background-color: #3f6ad8;
    border: none;
    padding: 6px 12px;
    text-transform: none;
    border-radius: .25rem;
    width: 10%;
    margin-top: 8px;
`