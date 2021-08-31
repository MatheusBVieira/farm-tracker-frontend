import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import usePageTitle from "../../core/hooks/usePageTitle"
import { User } from "../../sdk/@types"
import UserService from "../../sdk/services/User.service"
import InsertPlant from "../components/InsertPlant/InsertPlant"
import PlantView from "../components/PlantView"


export default function PlantList() {
    const [user, setUser] = useState<User.User>()

    usePageTitle('Jardin')

    useEffect(() => {
        UserService.getUser(1)
            .then(setUser)
    }, [])

    return <Wrapper>

        <InsertPlant />

        <PlantContent>
            {
                user?.plantas.map(u => {
                    return <PlantView name={u.nome} conta={u.conta} plantId={u.idPlanta} waterTime={"10 min"} width={350} />
                })
            }
        </PlantContent>
    </Wrapper>

}

const Wrapper = styled.div``

const PlantContent = styled.div`
    display: flex;
    gap: 12px;
`