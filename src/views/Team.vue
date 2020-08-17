<template>
    <div>
        <h3>{{team.nome}}</h3>
        <p>TESTE</p>
        <MoodTimeline :timeLineData="team.data"/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MoodTimeline from './../components/MoodTimeline.vue'

export default Vue.extend({
    created: function(){
        this.team = this.$store.getters.currentTeam
    },
    data: ()=>{
        return {
            team: []
        }
    }, components:{
        MoodTimeline
    }
})
</script>

<style lang="scss">

</style>