import { Auth } from "../@types/Auth";
import Service from "../Service";

class AuthService extends Service {

    static Login(user: Auth.Login) {
        return this.Http
            .post<Auth.Response>(`/auth`, user)
            .then(this.getData)
    }

}

export default AuthService