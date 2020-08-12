<template>
    <div>
        <cv-search size='xl' id="search-1" placeHolderText="Search" @input="searchUser"/>
        <div>
            <div v-for="user in users" :key="user._id" v-on:click="selectUser">{{user.apelido}}</div>
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
    props:{

    },
    methods:{
        searchUser(text){
            TeamService.listarUsuarios(text).then((response)=>{
                this.users = response.data
            })
        },
        selectUser(event){
            this.$emit('usuarioSelecionado', event.target.textContent)
        }
    }
}
</script>

<style>

</style>