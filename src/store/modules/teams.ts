

export default {
    state: {
        teams: Array<any>(),
        currentTeamId: 0
    },
    mutations: {
        ADD_TEAM(state: any, team: any) {
            state.teams.push(team);
        },
        REFRESH_TEAM(state: any, teams: any[]){
            state.teams = teams
        },
        SET_CURRENT_TEAM(state: any, _id: number){
            console.log("current id", _id);
            state.currentTeamId = _id
        }
    },
    getters: {
        currentTeam(state: any){
            console.log(state.teams.find( (team: any) => team._id == state.currentTeamId));
            return state.teams.find( (team: any) => team._id == state.currentTeamId) || {}
        },
        team(state: any, id: number){
            return state.teams.find( (team: any) => team._id == id) 
        },
        teams(state: any){
            return state.teams
        }
    },
}