import PlantViewItem from '../PlantViewItem/PlantViewItem'
import * as PV from './PlantView.styles'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export interface PlantViewProps {
    name: string,
    waterTime: string,
    plantId: string,
    conta: string,
    width: number
}

function PlantView(props: PlantViewProps) {
    return <PV.Card width={props.width}>
        <PV.Header>
            <img src="https://pvu-static.s3.ap-southeast-1.amazonaws.com/farms/mama.svg" />

            <PV.HeaderContent>
                <h2>{ props.name }</h2>
                <span>{props.plantId}</span>
                <span>{props.conta}</span>
            </PV.HeaderContent>

        </PV.Header>
        <PV.Infos>
            <PlantViewItem title="Água" subtitle="Sua planta não precisa de água" time={props.waterTime}></PlantViewItem>
            <PlantViewItem title="Corvo" subtitle="Não tem corvo na sua planta" time={props.waterTime}></PlantViewItem>
            <PlantViewItem title="Colher" subtitle="Tempo para colher sua planta" time={props.waterTime}></PlantViewItem>
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