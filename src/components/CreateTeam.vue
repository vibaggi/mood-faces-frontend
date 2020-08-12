<template>
  <div>
    <h3>Criação de equipe</h3>
    <p>Dê um nome e inclua participantes à sua equipe de trabalho.</p>
    <cv-text-input label="Nome da Equipe" placeholder="Equipe do balacobaco"></cv-text-input>
    <h4>lista de participantes</h4>
    <SearchPerson v-on:usuarioSelecionado="adicionarNaLista" />

    <cv-data-table
      title="Usuários Inseridos"
      :columns="columns"
      :data="filteredData"
      ref="table"
    >
      <template slot="batch-actions">
        <cv-button @click="removerDaLista">
          Delete
          <TrashCan16 class="bx--btn__icon" />
        </cv-button>
      </template>
    </cv-data-table>

    <cv-button>Criar Equipe</cv-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchPerson from "./SearchPerson.vue";

export default Vue.extend({
  name: "CreateTeam",
  components: {
    SearchPerson
  },
  methods: {
    adicionarNaLista(usuario: any) {
      console.log(usuario);
    },
    removerDaLista(){
      const refTable: any = this.$refs.table
      const indexLines = refTable.selectedRows
      this.filteredData = this.filteredData.filter((element, index)=> !indexLines.find(selIndex=> selIndex == index))
    }
  },
  data() {
    return {
      columns: ["Nome", "Email"],
      filteredData: [["Vitor Baggi", "vitor_baggi@hotmail.com"],["Pedro", "pedro@hotmail.com"]]
    };
  }
})
</script>


<style>
</style>