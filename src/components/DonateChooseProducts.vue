<template>
  <div class="hello">
    <h1>{{ campaign }}</h1>
 <p>
            <md-list-item
              v-for="item in products"
              :key="item._id"
              class="product-item"
            >
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
            </md-list-item>
          </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateChooseProducts",
  props: {
    campaign: String,
  },
  data () {
    return {
      products: []
    }
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_URL + "produtos"}`).then((response) => {
      this.products = response.data;
    });
  }
};
</script>

<style scoped></style>
