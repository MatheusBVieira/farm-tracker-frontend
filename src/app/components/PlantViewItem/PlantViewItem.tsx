import styled from "styled-components"

export interface PlantViewItemProps {
    title:string
    subtitle: string
    time: string
}

export default function PlantViewItem(props: PlantViewItemProps) {
    return <Item>
        <ItemText>
            <SpanTitle>{ props.title }</SpanTitle>
            <SpanSubTitle>{props.subtitle}</SpanSubTitle>
        </ItemText>
        <Time>{props.time}</Time>
    </Item>
}

export const Item = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(26, 54, 126, 0.125);;
    }
`

export const ItemText = styled.div`
    display: flex;
    flex-direction: column;
`

export const SpanTitle = styled.span`
    font-size: 22px;
    opacity: .8;
    font-weight: bold;
`
export const SpanSubTitle = styled.span`
    opacity: .5;
`

export const Time = styled.span`
    font-size: 28px;
    font-weight: 700;
    color: #0000FF;
`