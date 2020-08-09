<template>
  <div>
        <h3>Criação de equipe</h3>
        <p>Dê um nome e inclua participantes à sua equipe de trabalho. </p>
        <cv-text-input label="Nome da Equipe" placeholder="Equipe do balacobaco"></cv-text-input>
        <SearchPerson/>
  </div>
</template>

<script>
import SearchPerson from './SearchPerson'
export default {
  name: "CreateTeam",
  components:{
      SearchPerson
  }
}
</script>

<style>

</style>