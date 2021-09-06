import PlantViewItem from '../PlantViewItem/PlantViewItem'
import * as PV from './PlantView.styles'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import getDateForPlants from '../../../sdk/utils/getDateForPlants';

export interface PlantViewProps {
    name: string
    plantId: string
    conta: string
    width: number
    image: string
    harvestTime: string
    endTimeWater: string
}

function PlantView(props: PlantViewProps) {
    return <PV.Card width={props.width}>
        <PV.Header>
            <img src={props.image} />

            <PV.HeaderContent>
                <h2>{ props.name }</h2>
                <PV.Span>{props.plantId}</PV.Span>
                <span>{props.conta}</span>
            </PV.HeaderContent>

        </PV.Header>
        <PV.Infos>
            <PlantViewItem title="Água" subtitle="Sua planta não precisa de água" time={getDateForPlants(new Date(props.endTimeWater))}></PlantViewItem>
            <PlantViewItem title="Corvo" subtitle="Não tem corvo na sua planta" time="--"></PlantViewItem>
            <PlantViewItem title="Colher" subtitle="Tempo para colher sua planta" time={getDateForPlants(new Date(props.harvestTime))}></PlantViewItem>
            <PV.Buttons>
                <PV.ButtonContent>
                    <EditIcon fontSize="large" />
                    <span> Editar Planta </span>
                </PV.ButtonContent>
                <PV.ButtonContent>
                    <DeleteIcon fontSize="large" />
                    <span> Excluir Planta </span>
                </PV.ButtonContent>

            </PV.Buttons>
        </PV.Infos>

    </PV.Card>
}

export default PlantView