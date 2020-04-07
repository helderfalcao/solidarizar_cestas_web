<template>
  <form novalidate @submit.stop.prevent="showSnackbar = true">
    <div>
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
        .post("http://www.helderfalcao.com.br/instituicoes", instituicao)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>
