<template>
  <div>
    <div class="md-layout md-gutter ">
      <div class="md-layout-item md-size-100">
        <h1>Sua doação</h1>
      </div>
      <div class="md-layout-item md-size-33">
        <h2>Alimentos doados</h2>
        <md-chip
          class="md-primary"
          v-for="item in donation.produtos"
          :key="item._id"
          v-bind:value="item._id"
        >
          {{ item.produto.nome }} ({{ item.quantidade }})
        </md-chip>
      </div>
      <div class="md-layout-item md-size-33">
        <h2>Local e data</h2>
        <label>{{ dateFormated() }}</label>
      </div>
      <div class="md-layout-item md-size-33"></div>
    </div>
    <div class="md-layout md-gutter">
      <md-divider></md-divider>
      <div class="md-layout-item md-size-33"></div>
    </div>
  </div>
</template>

<script>
//import format from 'date-fns/format'

export default {
  name: "DonateConfirmation",
  props: {
    donation: {},
  },
  data: () => ({
    productsMap: new Map(),
    dia: null,
    donation: {},
  }),
  methods: {
    dateFormated: () => {
      if (this) {
        return this.$props.donation.dia;
      }
      return "";
    },
  },
};
</script>

<style scoped></style>
