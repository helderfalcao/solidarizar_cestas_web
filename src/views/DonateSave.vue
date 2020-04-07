<template>
  <form class="md-layout md-gutter" novalidate @submit.stop.prevent="showSnackbar = true">
    <div  class="md-layout-item">
     
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Config from "../source/Config"

export default {
  name: "DonateSave",
  data: () => {
    return {
      showSnackbar: false,
      doacao: {
      },
    };
  },
  methods: {
    save () {
      const doacao = this.doacao;
      axios
        .post(`${Config.API_URL + 'doacoes'}`, doacao)
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
