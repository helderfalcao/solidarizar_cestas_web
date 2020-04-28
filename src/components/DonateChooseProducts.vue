<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="aliment">Alimento</label>
          <md-select v-model="alimentSelection" name="aliment" id="aliment">
            <md-option
              v-for="item in products"
              :key="item._id"
              v-bind:value="item._id"
            >
              &nbsp;<span class="md-list-item-text">
                <md-avatar class="md-avatar-icon">
                  <img v-bind:src="item.imagem" alt="Avatar" />
                </md-avatar>
                <p class="avatar-item"></p>
                {{ item.nome }} - {{ item.descricao }}
              </span>
              <md-divider></md-divider>
            </md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label>Quantidade</label>
          <md-input v-model="alimentSelectionNumber" type="number"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-alignment-top-left">
        <md-button class="md-raised md-primary" @click="addDonation"
          >Adicionar</md-button
        >
      </div>
    </div>
    <div class="md-layout">
      <md-list>
        <md-list-item
          v-for="item in donations"
          :key="item._id"
          v-bind:value="item._id"
        >
          <md-avatar>
            <img v-bind:src="item.produto.imagem" alt="People" />
          </md-avatar>

          <span class="md-list-item-text"
            >{{ item.produto.nome }}({{ item.quantidade }})</span
          >

          <md-button
            class="md-icon-button md-list-action"
            @click="removeDonation(item.produto._id)"
          >
            <md-icon class="md-accent">remove_circle</md-icon>
          </md-button>
        </md-list-item>
      </md-list>
    </div>
    <md-button class="md-raised md-primary" @click="callback(donations)">
      Já escolhi o que doar
    </md-button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateChooseProducts",
  props: {
    campaign: String,
    callback: Function,
  },
  data: () => ({
    products: [],
    alimentSelection: null,
    alimentSelectionNumber: 0,
    donations: [],
  }),
  methods: {
    addDonation() {
      this.removeDonation(this.alimentSelection);
      const alimento = this.products.find(
        (product) => product._id === this.alimentSelection
      );
      this.donations.push({
        produto: alimento,
        quantidade: this.alimentSelectionNumber,
      });
    },
    removeDonation(aliment) {
      this.donations = this.donations.filter(
        (donation) => donation.produto._id !== aliment
      );
    },
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_URL + "produtos"}`).then((response) => {
      this.products = response.data;
    });
  },
};
</script>

<style scoped>
.md-avatar {
  width: 30px;
}
.md-list-item-text {
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 2.25em;
}
.avatar-item {
  align-self: center;
}
.md-divider {
  margin-top: 8px;
}
.md-added-product-icon {
  color: red;
}
</style>
