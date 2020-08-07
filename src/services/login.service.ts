import axios from 'axios'

export class LoginService {

    static url = process.env.urlBackEnd || "http://localhost:3000"
    
    static criarConta(username, password, email, apelido){
        return axios.post(this.url+"/create", {
            username, password, email, apelido
        })
    }

    static login(username, password){
        return axios.get(this.url+"/login", {
            auth: {
                username,
                password
            }
        })
    }

}