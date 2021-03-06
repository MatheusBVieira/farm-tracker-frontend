import { FarmTracker } from "."


export namespace Plant {

    export type Plant = FarmTracker.components['schemas']['PlantResponse']
    export type PlantRequest = FarmTracker.components['schemas']['PlantRequest']

    export type Query = {
        plantId?: number
        page?: number
        size?: number
        showAll?: boolean
        sort?: [keyof Plant, 'asc' | 'desc']
    }
}