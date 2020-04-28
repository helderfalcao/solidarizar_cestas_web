<template>
  <div v-if="ready">
    <md-card
      class="md-primary"
      v-for="[camp, summary] of summariesMap"
      :key="camp._id"
      v-bind:value="camp._id"
    >
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ camp.nome }}</div>
          <div class="md-subhead">{{ camp.responsavel }}</div>
        </md-card-header-text>

        <md-card-media>
          <img v-bind:src="`${getImgUrl(camp.imagem)}`" alt="Avatar" />
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>{{ summary.length }}</md-button>
        <md-button>Quero ajudar</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateSummary",
  data() {
    return {
      summariesMap: new Map(),
      ready: false,
    };
  },
  mounted: async function() {
    const campanhas = await axios.get(
      `${process.env.VUE_APP_URL + "campanhas"}`
    );
    const summaries = await Promise.all(
      campanhas.data.map((inst) =>
        axios.get(
          `${process.env.VUE_APP_URL + "campanhas/summary/" + inst._id}`
        )
      )
    );

    for (var i = 0; i < campanhas.data.length; i++) {
      this.summariesMap.set(campanhas.data[i], summaries[i]);
    }
    this.ready = true;
    console.table(this.summariesMap);
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.jpg$/);
      return images("./" + pet);
    }
  }
};
</script>

<style lang="scss" scoped></style>
