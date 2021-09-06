import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import usePageTitle from "../../core/hooks/usePageTitle"
import PlantService from "../../sdk/services/Plant.service"
import InsertPlant from "../components/InsertPlant/InsertPlant"
import PlantView from "../components/PlantView"
import { Plant } from "../../sdk/@types/Plant"


export default function PlantList() {
    const [plants, setPlants] = useState<Plant.Plant[]>()

    usePageTitle('Jardin')

    useEffect(() => {
        PlantService.getAllPlants().then(setPlants)
    }, [])

    return <Wrapper>

        <InsertPlant />

        <PlantContent>
            {
               plants?.map(p => {
                   return <PlantView
                       name={p.nome}
                       conta={p.conta}
                       plantId={p.codigoPlanta}
                       harvestTime={p.harvestTime}
                       endTimeWater={p.endTimeWater}
                       width={400}
                       image={p.iconUrl}
                   />
                })
            }
        </PlantContent>
    </Wrapper>

}

const Wrapper = styled.div``

const PlantContent = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`