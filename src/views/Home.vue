<template>
  <div class="home">
    <cv-header aria-label="Carbon header">
      <cv-skip-to-content href="#main-content">Skip to content</cv-skip-to-content>
      <cv-header-name href="javascript:void(0)" prefix="Mood Faces" @click="home">[Platform]</cv-header-name>
      <template slot="header-global">
        <cv-header-global-action aria-label="Criar Equipe" aria-controls="events-panel" @click="actionTeams" >
          <Events32 />
        </cv-header-global-action>
      </template>
      <template slot="left-panels"></template>
    </cv-header>
    <cv-side-nav id="side-nav" fixed expanded>
          <cv-side-nav-items>
            <cv-side-nav-menu title="Equipes" expanded>
              <cv-side-nav-menu-item v-for="equipe in equipes" :key="equipe">{{equipe}}</cv-side-nav-menu-item>
            </cv-side-nav-menu>
            <cv-side-nav-menu title="Dashbords" expanded>
              <cv-side-nav-menu-item href="javascript:void(0)">Seu desempenho</cv-side-nav-menu-item>
            </cv-side-nav-menu>
            <cv-side-nav-link href="javascript:void(0)">Ajuda</cv-side-nav-link>
            <cv-side-nav-link href="javascript:void(0)">Sobre</cv-side-nav-link>
          </cv-side-nav-items>
        </cv-side-nav>
    <cv-content id="#main-content">
      <router-view />
    </cv-content>
  </div>
</template>

<script>
import Events32 from '@carbon/icons-vue/es/events/32'
import { TeamService } from './../services/team.service'
export default {
  name: "Home",
  created: function(){
    TeamService.listarEquipesPorUsuario("vi").then((resp)=>{
      const equipes = resp.data.map((team)=> team.nome);
      this.equipes = equipes
    })
  },
  data: ()=>{
    return {
      equipes: []
    }
  },
  components: {
    Events32
  },
  methods: {
    actionTeams(){
      this.$router.push('/home/create-team')
    },
    home(){
      this.$router.push('/home')
    }
  }
};
</script>
