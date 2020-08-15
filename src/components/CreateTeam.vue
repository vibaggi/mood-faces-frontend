<template>
  <div>
    <h3>Criação de equipe</h3>
    <p>Dê um nome e inclua participantes à sua equipe de trabalho.</p>
    <cv-text-input label="Nome da Equipe" placeholder="Equipe do balacobaco" v-model="nomeEquipe"></cv-text-input>
    <h4>lista de participantes</h4>
    <SearchPerson v-on:usuarioSelecionado="adicionarNaLista" />

    <cv-data-table
      title="Usuários Inseridos"
      :columns="columns"
      :data="usuariosData"
      ref="table"
    >
      <template slot="batch-actions">
        <cv-button @click="removerDaLista">
          Delete
          <TrashCan16 class="bx--btn__icon" />
        </cv-button>
      </template>
    </cv-data-table>

    <cv-button @click="criarEquipe()">Criar Equipe</cv-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchPerson from "./SearchPerson.vue";
import { TeamService } from '../services/team.service';

export default Vue.extend({
  name: "CreateTeam",
  components: {
    SearchPerson
  },
  methods: {
    adicionarNaLista(usuario: any) {
      this.usuariosData.push([usuario.apelido, usuario.email])
    },
    removerDaLista(){
      const refTable: any = this.$refs.table
      const indexLines = refTable.selectedRows
      this.usuariosData = this.usuariosData.filter((element, index)=> !indexLines.find(selIndex=> selIndex == index))
    },
    criarEquipe(){
      TeamService.criarEquipe(this.nomeEquipe, this.usuariosData.map(info=> info[0])).then((resp: any)=>{
        console.log(resp);
      })
    }
  },
  data: function() {
    return {
      columns: ["Nome", "Email"],
      usuariosData: new Array<any>(), 
      nomeEquipe: ''
    };
  }
})
</script>


<style>
</style>