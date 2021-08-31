import styled from "styled-components"
import AddIcon from '@material-ui/icons/Add';
import { NavLink } from "react-router-dom";


export default function InsertPlant() {
    return <Wrapper>
        <NavLink exact to="/garden/create">
                <AddIcon fontSize="large"/>
                <span>Nova Planta</span>
        </NavLink>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 350px;
    height: 100px;
    border: 1px solid rgba(26, 54, 126, 0.125);
    margin-bottom: 12px;

    a{
        height: 100%;
        cursor: pointer;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        align-content: center;
        gap: 4px;
        text-decoration: none;
        color: #000;
    }
`