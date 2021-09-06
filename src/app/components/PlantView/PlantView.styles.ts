import styled from "styled-components";

export const Card = styled.div<{
    width: number
}>`
    border: 1px solid rgba(26, 54, 126, 0.125);
    width: ${p => p.width}px;
`

export const Header = styled.div`
    padding: 32px;
    display: flex;
    justify-content: center;
    gap: 16px;
    border-bottom: 1px solid rgba(26, 54, 126, 0.125);
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Span = styled.span`
    font-size: 14px;
`

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
`

export const Buttons = styled.div`
    display: grid;
    grid-column: 2;
    grid-template-columns: repeat(2, 1fr);
`

export const ButtonContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-right: 1px solid rgba(26, 54, 126, 0.125);
`



