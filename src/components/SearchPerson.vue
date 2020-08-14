<template>
    <div>
        <cv-search size='xl' id="search-1" placeHolderText="Search" @input="searchUser"/>
        <div class="users-list">
            <div v-for="user in users" :key="user._id" @click="selectUser(user)">{{user.apelido}}</div>
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
        selectUser(usuario){
            this.$emit('usuarioSelecionado', usuario)
            this.users = []
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/_carbon';
    
    .users-list{
        display: flex;
        flex-direction: column;
        width: 100%;
        div{
            width: 100%;
            height: 30px;
            line-height: 30px;
            cursor:pointer;
            background-color: $carbon--cool-gray-10;
            text-align: left;
            padding: 0 $spacing-04;
        }
    }
</style>