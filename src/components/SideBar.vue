<template>
  <div id="side-bar">
    <div id="side-bar-title"><div>Equipes</div><div>+</div></div>
    <ul>
      <li v-for="equipe in listarEquipes()" v-bind:key="equipe.nome">{{equipe.nome}}</li>
    </ul>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Register extends Vue {
  listarEquipes() {
    return [{ nome: "Equipe 1" }, { nome: "Equipe 2" }];
    // return this.$store.state.teams
  }
}
</script>

<style lang="scss">
#side-bar {
  background-color: #000044;
  color: white;
  &-title{
      display: flex;
      flex-direction: row;
  }
}

ul{
    list-style-type: none;
    padding: 0;
    li {
    cursor: pointer;
    padding: 5px 0;
    &:hover{
        background-color: #000099;
        font-weight: bold;
    }
    }
}
</style>