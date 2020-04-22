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
        <h2>Data</h2>
        <label>Dia: {{ dateFormated }}</label>
        <h2>Local</h2>
        <label>Local: {{ donation.receptor.nome }}</label>
        <br />
        <label>Endereço: {{ donation.receptor.endereco }}</label>
        <br />
        <label>Responsável: {{ donation.receptor.responsavel }}</label>
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
import format from "date-fns/format";

export default {
  name: "DonateConfirmation",
  props: {
    donation: {},
  },
  data: () => ({
    productsMap: new Map(),
    dia: null,
    donation: {},
    dateFormated: "",
  }),
  mounted() {
    this.dateFormated = format(this.donation.dia, "dd/MM/yyyy");
  },
};
</script>

<style scoped></style>
