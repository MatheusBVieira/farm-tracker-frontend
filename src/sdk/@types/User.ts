import { FarmTracker } from "."

export namespace User {
    
    export type Input = FarmTracker.components['schemas']['PlantInput']
    export type User = FarmTracker.components['schemas']['UserResponse']

    export type Query = {
        editorId?: number
        page?: number
        size?: number
        showAll?: boolean
        sort?: [keyof User, 'asc' | 'desc']
    }


}