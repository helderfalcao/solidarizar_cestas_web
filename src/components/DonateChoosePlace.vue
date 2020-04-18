<template>
  <div class="hello">
    <h1>{{ campaign }}</h1>
    <p>
      <md-radio v-model="radio" value="accent">
        <span class="md-list-item-text">Campanha</span>
        <small>Instituição</small>
        </md-radio>
      <md-radio v-model="radio" value="test">
        <span class="md-list-item-text">Campanha 2</span>
        <small>Instituição 2</small></md-radio
      >
    </p>
  </div>
</template>

<script>
export default {
  name: "DonateChoosePlace",
  props: {
    campaign: String,
  }
};
</script>

<style scoped></style>
