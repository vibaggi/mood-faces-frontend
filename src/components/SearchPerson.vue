<template>
    <div>
        <cv-search size='xl' id="search-1" placeHolderText="Search" @input="searchUser"/>
        <div>
            <div v-for="user in users" :key="user" >{{user}}</div>
        </div>
    </div>
</template>

<script>
export default {
    
    data(){
        return{
            users: []
        }
    },
    methods:{
        searchUser(text){
            console.log(text);
            this.users = ['teste']
        }
    }
}
</script>

<style>

</style>