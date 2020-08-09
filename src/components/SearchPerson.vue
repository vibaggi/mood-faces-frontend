<template>
    <div>
        <cv-search size='xl' id="search-1" placeHolderText="Search" @input="searchUser"/>
        <div>
            <div v-for="user in users" :key="user._id" >{{user.apelido}}</div>
        </div>
    </div>
</template>

<script>
import { TeamService } from '../services/team.service'
export default {
    
    data(){
        return{
            users: []
        }
    },
    methods:{
        searchUser(text){
            TeamService.listarUsuarios(text).then((response)=>{
                console.log(response);
                this.users = response.data
            })
        }
    }
}
</script>

<style>

</style>