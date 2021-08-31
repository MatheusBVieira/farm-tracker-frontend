export namespace FarmTracker {

    export interface components {
        schemas: {
            UserResponse: {
                id: number
                nome: string
                plantas: [{
                    id: number
                    idPlanta: string
                    sunflowerId: number
                    nome: string
                    conta: string
                    startTime: string
                    startTimeWater: string
                    endTimeWater: string
                    harvestTime: string
                    iconUrl: string
                }]
            };

            PlantInput: {
                conta: string
                nome: string
            };


        }

    }
}