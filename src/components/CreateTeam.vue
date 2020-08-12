<template>
  <div>
        <h3>Criação de equipe</h3>
        <p>Dê um nome e inclua participantes à sua equipe de trabalho. </p>
        <cv-text-input label="Nome da Equipe" placeholder="Equipe do balacobaco"></cv-text-input>
        <h4>lista de participantes</h4>
        <SearchPerson v-on:usuarioSelecionado="adicionarNaLista"/>
        <cv-button>Criar Equipe</cv-button>
  </div>
</template>

<script lang="ts">
import SearchPerson from './SearchPerson.vue'
export default {
  name: "CreateTeam",
  components:{
      SearchPerson
  },
  methods: {
    adicionarNaLista(usuario: any){
      console.log(usuario);
    }
  }
}
</script>

<style>

</style>