import { Plant } from "../@types/Plant";
import Service from "../Service";
import generateQueryString from "../utils/generateQueryString";


class PlantService extends Service {

    static getAllPlants(search?: Plant.Query) {
        const queryString = search ? generateQueryString(search) : '';

        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('validated_token')
            this.Http.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }

        return this.Http
            .get<Plant.Plant[]>('/planta'.concat(queryString))
            .then(this.getData)
    }

    static insertNewPlant(plant: Plant.PlantRequest) {
        if (typeof window !== 'undefined') {
            const token = sessionStorage.getItem('validated_token')
            this.Http.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }

        return this.Http
            .post<Plant.PlantRequest>('/planta', plant)
            .then(this.getData)


    }


}

export default PlantService