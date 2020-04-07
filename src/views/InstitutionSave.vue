<template>
  <form novalidate @submit.stop.prevent="showSnackbar = true">
    <div>
      <md-field>
        <label>Nome</label>
        <md-input v-model="name"></md-input>
      </md-field>

      <md-field>
        <label>Descrição</label>
        <md-input v-model="description"></md-input>
      </md-field>

      <md-field>
        <label>Responsável</label>
        <md-input v-model="responsible"></md-input>
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
        name: null,
        description: null,
        responsible: null,
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
