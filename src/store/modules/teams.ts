

export default {
    state: {
        teams: Array<any>()
    },
    mutations: {
        ADD_TEAM(state: any, team: any) {
            state.teams.push(team);
        }
    },
    getters: {
        team(state: any, id: number){
            return state.teams.find( (team: any) => team.id == id) 
        }
    },
}