<template>
  <div class="home">
    <cv-header aria-label="Carbon header">
      <cv-skip-to-content href="#main-content">Skip to content</cv-skip-to-content>
      <cv-header-name href="javascript:void(0)" prefix="Mood Faces" @click="home"> Platform </cv-header-name>
      <template slot="header-global">
        <cv-header-global-action aria-label="Criar Equipe" aria-controls="events-panel" @click="actionTeams" >
          <Events32 />
        </cv-header-global-action>
        <cv-header-global-action aria-label="Sair" aria-controls="events-panel" @click="logout" >
          <Logout32 />
        </cv-header-global-action>
      </template>
      <template slot="left-panels"></template>
    </cv-header>
    <cv-side-nav id="side-nav" fixed expanded>
          <cv-side-nav-items>
            <cv-side-nav-menu title="Equipes" expanded>
              <cv-side-nav-menu-item v-for="equipe in $store.getters.teams" :key="equipe._id" @click="showTeam(equipe._id)">{{equipe.nome}}</cv-side-nav-menu-item>
            </cv-side-nav-menu>
            <cv-side-nav-menu title="Dashbords" expanded>
              <cv-side-nav-menu-item href="javascript:void(0)">Seu desempenho</cv-side-nav-menu-item>
            </cv-side-nav-menu>
            <cv-side-nav-link href="javascript:void(0)">Ajuda</cv-side-nav-link>
            <cv-side-nav-link href="javascript:void(0)" @click="home">Sobre</cv-side-nav-link>
          </cv-side-nav-items>
        </cv-side-nav>
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import Events32 from '@carbon/icons-vue/es/events/32'
import Logout32 from '@carbon/icons-vue/es/logout/32'
import { TeamService } from './../services/team.service'
export default {
  name: "Home",
  created: function(){
    TeamService.listarEquipesPorUsuario(this.$store.getters.login).then((resp)=>{
      this.$store.commit('REFRESH_TEAM', resp.data)
    })
  },
  data: ()=>{
    return {
      // equipes: this.
    }
  },
  components: {
    Events32, Logout32
  },
  methods: {
    actionTeams(){
      this.$router.push('/home/create-team')
    },
    home(){
      this.$router.push('/home/about')
    },
    showTeam(id){
      this.$store.commit('SET_CURRENT_TEAM', id)
      this.$router.push('/home/team')
    },
    logout(){
      this.$router.push('/')
    }
  }
};
</script>
