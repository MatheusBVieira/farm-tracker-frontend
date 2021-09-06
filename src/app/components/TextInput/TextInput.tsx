import styled from "styled-components"
import { InputHTMLAttributes } from 'react'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

export default function TextInput({label, ...props }: TextInputProps) {

    return <Wrapper>
        {
            label &&
            <span>
                {label}:
            </span>
        }
        <input
            type="text"
            {...props}
        />
    </Wrapper>

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    span {
        margin: 8px 0;
    }
    
    input {
        padding: 4px;
        font-size: 18px;
        margin-bottom: 8px;
    }
`