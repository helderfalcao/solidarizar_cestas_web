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
          <DonateCampaign :callback="escolhaCampanha" />
        </md-step>

        <md-step
          id="second"
          md-label="Escolha o que gostaria de doar"
          :md-error="secondStepError"
          :md-editable="false"
          :md-done.sync="second"
        >
          <DonateChooseProducts :callback="escolhaProdutos" />
        </md-step>

        <md-step
          id="third"
          md-label="Escolha o lugar para deixar sua doação"
          :md-editable="false"
          :md-done.sync="third"
        >
          <DonateChoosePlace :callback="escolherLugar" />
        </md-step>
        <md-step
          id="fourth"
          md-label="Confirme sua doação"
          :md-editable="false"
          :md-done.sync="fourth"
        >
          <p>
            <DonateConfirmation v-if="doacao.receptor" :donation="doacao" />
          </p>
        </md-step>
      </md-steppers>
      <md-list> </md-list>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import DonateCampaign from "@/components/DonateCampaign.vue";
import DonateChooseProducts from "@/components/DonateChooseProducts.vue";
import DonateChoosePlace from "@/components/DonateChoosePlace.vue";
import DonateConfirmation from "@/components/DonateConfirmation.vue";

export default {
  name: "DonateSave",
  data: () => {
    return {
      radio: "test",
      title: "Campanhas",
      showSnackbar: false,
      doacao: {},
      active: "first",
      first: false,
      second: false,
      third: false,
      fourth: false,
      secondStepError: null,
    };
  },
  components: {
    DonateCampaign,
    DonateChooseProducts,
    DonateChoosePlace,
    DonateConfirmation,
  },
  methods: {
    escolhaCampanha(idCampanha) {
      this.doacao.campanha = idCampanha;
      this.setDone("first", "second");
    },
    escolhaProdutos(produtos) {
      this.doacao.produtos = produtos;
      this.setDone("second", "third");
    },
    escolherLugar(lugar, dia) {
      this.doacao.receptor = lugar;
      this.doacao.dia = dia;
      this.setDone("third", "fourth");
    },
    save() {
      const doacao = this.doacao;
      axios
        .post(`${process.env.VUE_APP_URL + "doacoes"}`, doacao)
        .then((response) => {
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
    },
  },
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
