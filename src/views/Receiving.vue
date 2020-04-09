<template>
  <form class="md-layout md-gutter" novalidate @submit.stop.prevent="showSnackbar = true">
    <div  class="md-layout-item">
     
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "ReceptorSave",
  data: () => {
    return {
      showSnackbar: false,
      receptor: {
      },
    };
  },
  methods: {
    save () {
      const receptor = this.receptor;
      axios
        .post(`${Vue.config.publicPath + 'receptores'}`, receptor)
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
