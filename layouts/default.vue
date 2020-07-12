<template>
  <v-app>
    <nav-bar />
    <v-main>
      <v-btn id="toggleDarkMode" x-large icon><v-icon>mdi-eye</v-icon></v-btn>  
      <v-container style="max-width: 1000px;">
         <nuxt />
      </v-container>
     
    </v-main>
    
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  },
}
</script>

<style lang="scss" scoped>
  .theme--dark.v-application {
    background-color: var(--v-background-base, #121212) !important;
  }
  .theme--light.v-application {
    background-color: var(--v-background-base, white) !important;
  }

  #toggleDarkMode {
    position: fixed;
    bottom: 0;
    right: 0;
  }
</style>