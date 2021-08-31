import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar () {
  return <Wrapper>
    <List>
      <Item><NavLink exact to="/garden">Jardin</NavLink></Item>
    </List>
  </Wrapper>
}

const Wrapper = styled.div`
  padding: 20px;
  width: 200px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`

const Item = styled.li`
  font-size: 18px;

  a {
    text-decoration: none;
    color: #274060;

    &.active {
      color: #09f;
    }
  }
`

