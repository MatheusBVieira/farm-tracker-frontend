import { User } from "../@types";
import Service from "../Service";

class UserService extends Service {

    static getUser(id: number) {
        return this.Http
            .get<User.User>(`/usuario/${id}/fazenda`)
            .then(this.getData)
    }

    static insertNewPlant (plant: User.Input, idPlanta: string ) {
        return this.Http
        .post<User.User>(`/usuario/1/fazenda/${idPlanta}`, plant)
        .then(this.getData)
    }
    
}

export default UserService

