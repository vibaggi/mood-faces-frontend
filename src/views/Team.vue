<template>
  <div>
    <h3>{{team.nome}}</h3>
    <MoodTimeline :timeLineData="team.data" />
    <cv-button @click="openModal = true" :disabled="alreadyVote">Avaliar Dia</cv-button>

    <cv-modal :visible="openModal" >
      <template slot="content">
        <div id="mood-timeline-data-y-legend">
                <div class="bx--grid">
                    <div class="bx--row">
                        <div class="bx--col"><img src="@/assets/amazing.svg" alt="amazing" @click="evaluate('AMAZING')"/></div>
                        <div class="bx--col"><img src="@/assets/happy.svg" alt="happy" @click="evaluate('HAPPY')"/></div>
                    </div>
                     <div class="bx--row">
                        <div class="bx--col"><img src="@/assets/notgood.svg" alt="notgood" @click="evaluate('NOTGOOD')"/></div>
                        <div class="bx--col"><img src="@/assets/bad.svg" alt="bad" @click="evaluate('BAD')"/></div>
                    </div>
                </div>
            </div>
      </template>
    </cv-modal>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MoodTimeline from "./../components/MoodTimeline.vue";

export default Vue.extend({
  created: function() {
    const login = this.$store.getters.login;
    this.team = this.$store.getters.currentTeam;
    const today = new Date(Date.now())
    today.setHours(0,0,0,0);
    const dayData = this.team.data.find(data=> data.date == today.getTime())
    if(!dayData || !dayData.evaluations.find(data => data.login == login)) this.alreadyVote = false
  },
  data: () => {
    return {
      team: { data: new Array<any>()},
      openModal: false,
      alreadyVote: true
    };
  },
  components: {
    MoodTimeline
  },
  methods:{
      evaluate(mood: string){
          const payload = {
              mood: mood,
              login: this.$store.getters.login
          }
          this.$store.commit('EVALUATE_DAY', payload)
          this.openModal = false
          this.alreadyVote = true
      }
  }
});
</script>

<style lang="scss">
img{
    cursor: pointer;
}
</style>