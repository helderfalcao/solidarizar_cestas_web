<template>
  <form
    class="md-layout md-gutter"
    novalidate
    @submit.stop.prevent="showSnackbar = true"
  >
    <div class="md-layout-item">
      <md-list :md-expand-single="expandSingle">
        <md-list-item md-expand :md-expanded.sync="expandNews">
          <md-icon>announcement</md-icon>
          <span class="md-list-item-text">Campanha - Instituição</span>
          <md-list slot="md-expand">
            <md-list-item v-for="item in products" :key="item._id">
              <span>
                <md-avatar class="md-avatar-icon">
                  <img v-bind:src="item.imagem" alt="Avatar" />
                </md-avatar>
              </span>
              <span class="md-list-item-text">{{ item.nome }}</span>
              <md-button class="md-icon-button md-list-action">
                <md-badge class="md-primary" md-content="6" />
              </md-button>
              <md-button class="md-icon-button md-list-action">
                <md-badge md-content="6" />
              </md-button>
              <md-button class="md-list-action md-raised md-primary">
                Doar
              </md-button>
            </md-list-item>
          </md-list>
        </md-list-item>
      </md-list>
      <md-list> </md-list>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateSave",
  data: () => {
    return {
      title: "Campanhas",
      showSnackbar: false,
      doacao: {},
      products: [],
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_URL + "produtos"}`).then((response) => {
      this.products = response.data;
    });
  },
  methods: {
    save() {
      const doacao = this.doacao;
      axios
        .post(`${process.env.VUE_APP_URL + "doacoes"}`, doacao)
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  max-width: 500px;
  margin-left: 16px;
  margin-right: 16px;
}
.md-list-item-text {
  margin-left: 8px;
}
</style>
