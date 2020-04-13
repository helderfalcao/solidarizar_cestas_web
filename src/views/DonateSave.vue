<template>
  <form
    class="md-layout md-gutter"
    novalidate
    @submit.stop.prevent="showSnackbar = true"
  >
    <div class="md-layout-item">
      <md-steppers :md-active-step.sync="active" md-linear>
        <md-step
          id="first"
          md-label="Escolha a campanha"
          md-description="Considere os produtos"
          :md-editable="false"
          :md-done.sync="first"
        >
          <p>
            <md-radio v-model="radio" value="accent">
              <span class="md-list-item-text">Campanha</span>
              <small>Instituição</small></md-radio
            >
            <md-radio v-model="radio" value="test">
              <span class="md-list-item-text">Campanha 2</span>
              <small>Instituição 2</small></md-radio
            >
          </p>
          <md-button
            class="md-raised md-primary"
            @click="setDone('first', 'second')"
            >Já escolhi a campanha</md-button
          >
        </md-step>

        <md-step
          id="second"
          md-label="Escolha oq gostaria de doar"
          :md-error="secondStepError"
          :md-editable="false"
          :md-done.sync="second"
        >
          <p>
            <md-list-item v-for="item in products" :key="item._id" class="product-item">
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
          <md-button
            class="md-raised md-primary"
            @click="setDone('second', 'third')"
            >Já escolhi oq doar</md-button
          >
        </md-step>

        <md-step
          id="third"
          md-label="Escolha o lugar para deixar sua doação"
          :md-editable="true"
          :md-done.sync="third"
        >
          <p>
            c
          </p>
          <md-button
            class="md-raised md-primary"
            @click="setDone('third', 'fourth')"
            >Este é o melhor lugar e data para deixar minha doação</md-button
          >
        </md-step>
        <md-step
          id="fourth"
          md-label="Confirme sua doação"
          :md-editable="false"
          :md-done.sync="fourth"
        >
          <p>
            c
          </p>
          <md-button class="md-raised md-primary" @click="setDone('fourth')"
            >Posso contribuir </md-button
          >
        </md-step>
      </md-steppers>

      <md-list> </md-list>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "DonateSave",
  data: () => {
    return {
      radio: "test",
      title: "Campanhas",
      showSnackbar: false,
      doacao: {},
      products: [],
      active: "first",
      first: false,
      second: false,
      third: false,
      secondStepError: null
    };
  },
  mounted() {
    axios.get(`${process.env.VUE_APP_URL + "produtos"}`).then(response => {
      this.products = response.data;
    });
  },
  methods: {
    save() {
      const doacao = this.doacao;
      axios
        .post(`${process.env.VUE_APP_URL + "doacoes"}`, doacao)
        .then(response => {
          console.log(response);
        });
    },
    setDone(id, index) {
      this[id] = true;

      this.secondStepError = null;

      if (index) {
        this.active = index;
      }
    },
    setError() {
      this.secondStepError = "This is an error!";
    }
  }
};
</script>

<style lang="scss" scoped>
.md-layout-item {
  margin-left: 16px;
  margin-right: 16px;
}
.md-list-item-text {
  margin-left: 8px;
}
.md-radio {
  display: flex;
}

.product-item {
  max-width: 500px;
}
</style>
