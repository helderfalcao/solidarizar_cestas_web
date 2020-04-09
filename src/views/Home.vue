<template>
  <div class="page-container home">
    <img class="logo" alt="Solidarizar Cestas" src="../assets/help.jpg" />
    <md-app>
      <md-app-content>
        <p>Muitos precisam, aqui muitos podem ajudar :).</p>
        <router-link to="/donate">Doar</router-link>
        <p>Veja o quanto falta para atingirmos nossos objetivos.</p>
        <router-link to="/donate">Campanhas</router-link>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.logo {
  height: 200px;
}
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
