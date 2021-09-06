import { useState } from "react"
import { useHistory } from "react-router";
import styled from "styled-components"
import AuthService from "../../sdk/services/Auth.service"
import TextInput from "../components/TextInput/TextInput"


export default function LoginFrom() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const loginRequest = {
            email,
            senha,
        }

        const loginResponse = await AuthService.Login(loginRequest)

        sessionStorage.setItem('validated_token', loginResponse.token)
        history.push("/garden")
    }
    
    return <FormWrapper onSubmit={handleFormSubmit}>
        <InputContent>
            <TextInput
                label="Email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
                required
            />
            <TextInput
                label="Senha"
                value={senha}
                onChange={e => setSenha(e.currentTarget.value)}
                type="password"
                required
            />
        </InputContent>
        <Button type="submit">Login</Button>
    </FormWrapper>

}

const FormWrapper = styled.form`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
`

const Button = styled.button`
    color: #fff;
    background-color: #3f6ad8;
    border: none;
    padding: 10px 12px;
    text-transform: none;
    border-radius: .25rem;
    width: 10%;
    margin-top: 8px;
`