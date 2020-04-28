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
    <md-divider class="confirmation-divider"></md-divider>
    <md-button class="md-raised md-primary" @click="confirmDonation()">
      Posso contribuir
    </md-button>
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {
    confirmDonation() {
      const donationToServer = {};
      donationToServer.campanha = this.donation.campanha;
      donationToServer.receptor = this.donation.receptor._id;
      donationToServer.dia = format(this.donation.dia, "yyyy/MM/dd");
      donationToServer.produtos = this.donation.produtos.map((prod) => {
        return { produto: prod.produto._id, quantidade: prod.quantidade }
      });

      axios.post(`${process.env.VUE_APP_URL + "doacoes"}`, donationToServer);
    },
  },
  mounted() {
    this.dateFormated = format(this.donation.dia, "dd/MM/yyyy");
  },
};
</script>

<style scoped>
.confirmation-divider {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
