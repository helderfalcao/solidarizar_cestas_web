<template>
  <div>
    <div class="md-layout md-gutter">
      <p class="md-alignment-top-left">
        <md-card class="md-primary" v-for="item in campanhas" :key="item._id">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ item.nome }}</div>
              <div class="md-subhead">
                {{ instituicoesMap.get(item.idInstituicao) }}
              </div>
            </md-card-header-text>

            <md-card-media>
              <img v-bind:src="`${getImgUrl(item.imagem)}`" alt="Avatar" />
            </md-card-media>
          </md-card-header>
          <md-card-content>
            {{ item.descricao }}
          </md-card-content>

          <md-card-actions>
            <md-button @click="callback(item._id)">Apoiar Campanha</md-button>
          </md-card-actions>
        </md-card>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateCampaign",
  props: {
    msg: String,
    callback: Function
  },

  data() {
    return {
      campanhas: [],
      instituicoesMap: new Map(),
      selectedCampaign: "",
    };
  },
  mounted() {
    const vm = this;
    axios.get(`${process.env.VUE_APP_URL + "campanhas"}`).then((response) => {
      this.campanhas = response.data;
    });
    axios
      .get(`${process.env.VUE_APP_URL + "instituicoes"}`)
      .then((response) => {
        response.data.map((instituicao) =>
          vm.instituicoesMap.set(instituicao._id, instituicao.nome)
        );
      });
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./" + pet);
    },
  },
};
</script>

<style scoped>
.md-card {
  max-width: 300px;
}
  </style>
