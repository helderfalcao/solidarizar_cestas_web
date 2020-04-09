<template>
  <form class="md-layout md-gutter" novalidate @submit.stop.prevent="showSnackbar = true">
    <div  class="md-layout-item">
     
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductSave",
  data: () => {
    return {
      showSnackbar: false,
      produto: {
      },
    };
  },
  methods: {
    save () {
      const produto = this.produto;
      axios
        .post(`${process.env.VUE_APP_URL + 'produtos'}`, produto)
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
