import axios from 'axios'


export class TeamService {

    static url = process.env.urlBackEnd || "http://localhost:3000"

    static listarEquipes(text: string){
        return axios.get(this.url+"/teams/listar/"+text)
    }

}