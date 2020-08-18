import { TeamService } from '@/services/team.service';


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
        },
        EVALUATE_DAY(state: any, payload: any){
            console.log(payload);
            TeamService.avaliarDia(state.currentTeamId, payload.mood, payload.login).then((resp: any)=>{
                console.log(resp.data);
                const teamActual = resp.data
                const index = state.teams.findIndex(t=> t._id == state.currentTeamId)
                state.teams[index].data = teamActual.data //refresh data
            })
        }
    },
    getters: {
        currentTeam(state: any){
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