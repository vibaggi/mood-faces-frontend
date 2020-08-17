export default {

    state: {
        login: '',
        accessToken: '',
        apelido: ''
    },
    mutations: {
        LOGIN(state: any, usuario: any){
            console.log("inserindo");
            console.log(usuario);
            state.login = usuario.login,
            state.accessToken = usuario.token
            state.apelido = usuario.apelido
        }
    },
    getters: {
        login(state: any){
            return state.login
        },
        accessToken(state: any){
            return state.accessToken
        }
    }


}