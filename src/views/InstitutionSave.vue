<template>
  <form class="md-layout md-gutter" novalidate @submit.stop.prevent="showSnackbar = true">
    <div  class="md-layout-item">
      <md-field>
        <label>Nome</label>
        <md-input v-model="instituicao.nome"></md-input>
      </md-field>

      <md-field>
        <label>Descrição</label>
        <md-input v-model="instituicao.descricao"></md-input>
      </md-field>

      <md-field>
        <label>Responsável</label>
        <md-input v-model="instituicao.responsavel"></md-input>
      </md-field>
      <md-button type="submit" class="md-fab md-primary" v-on:click="save()">
        <md-icon>add</md-icon>
      </md-button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "InstitutionSave",
  data: () => {
    return {
      showSnackbar: false,
      instituicao: {
        nome: null,
        descricao: null,
        responsavel: null,
      },
    };
  },
  methods: {
    save () {
      const instituicao = this.instituicao;
      axios
        .post(`${process.env.VUE_APP_URL + 'instituicoes'}`, instituicao)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin-left: 16px;
  margin-right: 16px;
}

</style>
