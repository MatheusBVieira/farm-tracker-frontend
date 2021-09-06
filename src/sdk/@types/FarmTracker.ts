export namespace FarmTracker {

    export interface components {
        schemas: {
            UserResponse: {
                id: number
                nome: string
            };
            Login: {
                email: string
                senha: string
            };
            LoginResponse: {
                token: string
                tipo: string
            };
            PlantInput: {
                conta: string
                nome: string
            };
            PlantResponse: {
                id: number
                codigoPlanta: string
                sunflowerId: number
                nome: string
                conta: string
                startTime: string
                startTimeWater: string
                endTimeWater: string
                harvestTime: string
                iconUrl: string
            }


        }

    }
}