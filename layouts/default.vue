<template>
  <v-app>
    <nav-bar />
    <v-main>
      <nuxt />
    </v-main>
    
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
  .theme--dark.v-application {
    background-color: var(--v-background-base, #121212) !important;
  }
  .theme--light.v-application {
    background-color: var(--v-background-base, white) !important;
  }
</style>