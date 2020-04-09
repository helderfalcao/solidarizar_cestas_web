<template>
  <form
    class="md-layout md-gutter"
    novalidate
    @submit.stop.prevent="showSnackbar = true"
  >
    <div class="md-layout-item">
      <md-avatar class="md-avatar-icon">A</md-avatar>
      <ul id="donate_list">
        <li v-for="item in products" :key="item._id">
          <md-avatar class="md-avatar-icon"> <img v-bind:src="item.imagem" alt="Avatar"></md-avatar>
          {{ item.nome }}
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateSave",
  data: () => {
    return {
      showSnackbar: false,
      doacao: {},
      products: []
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_URL + "produtos"}`).then(response => {
      this.products = response.data;
    })
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
  margin-left: 16px;
  margin-right: 16px;
}
</style>
