<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item" v-for="item in receptors" :key="item._id">
        <md-card class="md-primary">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ item.nome }}</div>
              <div class="md-subhead">
                {{ item.responsavel }}
              </div>
            </md-card-header-text>

            <md-card-media>
              <img v-bind:src="`${getImgUrl(item.imagem)}`" alt="Avatar" />
            </md-card-media>
          </md-card-header>
          <md-card-content>
            {{ item.endereco }}
          </md-card-content>

          <md-card-actions>
            <md-button @click="callback(item, dia)">Escolher local</md-button>
          </md-card-actions>
        </md-card>
      </div>
      <div class="md-layout-item"> 
        <md-datepicker v-model="dia" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateChoosePlace",
  props: {
    callback: Function,
  },
  data: () => ({
    receptors: [],
    dia: null
  }),
  mounted() {
    const vm = this;
    axios.get(`${process.env.VUE_APP_URL + "receptores"}`).then((response) => {
      vm.receptors = response.data;
    });
    this.$material.locale = {
      startYear: 2020,
      endYear: 2099,
      dateFormat: 'dd/MM/yyyy',
      days: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
      shortDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
      shorterDays: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      shorterMonths: ['J', 'F', 'M', 'A', 'M', 'Jn', 'Jl', 'A', 'S', 'O', 'N', 'D'],
      firstDayOfAWeek: 0
    }
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context("../assets/", false, /\.jpg$/);
      if (pet) {
        return images("./" + pet);
      }
      return images("./help.jpg");
    }
  }
};
</script>

<style scoped>
.md-layout-item {
  max-width: 350px;
}
</style>
