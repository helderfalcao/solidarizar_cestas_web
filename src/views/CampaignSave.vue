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
  name: "CampaignSave",
  data: () => {
    return {
      showSnackbar: false,
      campanha: {
      },
    };
  },
  methods: {
    save () {
      const campanha = this.campanha;
      axios
        .post(`${Config.API_URL + 'campanhas'}`, campanha)
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
