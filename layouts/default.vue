<template>
  <v-app>
    <nav-bar />
    <v-main>
      
      <v-container style="max-width: 1000px;">
         <nuxt />
      </v-container>
     
    </v-main>
    <v-footer
      style="background-color: rgb(0, 0, 0, 0)"
    >

   <v-row align="center" justify="center">
      <v-col align="center" justify="center">
          <v-icon @click="toggleSpinner" style="transition-duration: .2s;" size="100px" :color="colors[selectedColor]">{{ icons[selectedIcon] }}
          </v-icon>
        <h1 id="footer">Hungry Ape</h1>
      </v-col>
    </v-row>

   

    
      
    </v-footer>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  data: () => {
    return {
      icons: ["mdi-food", "mdi-pasta", "mdi-food-apple", "mdi-emoticon", "mdi-emoticon-happy", "mdi-emoticon-kiss-outline", "mdi-emoticon-outline", "mdi-emoticon-wink", "mdi-emoticon-wink-outline", "mdi-emoticon-cool", "mdi-food-apple-outline", "mdi-food-croissant", "mdi-food-drumstick", "mdi-food-fork-drink", "mdi-food-steak", "mdi-food-variant", "mdi-noodles", "mdi-peanut", "mdi-shaker", "mdi-shaker-outline"],
      selectedIcon: 0,
      colors: ["#f1c5c5", "#8bcdcd", "#fa26a044"],
      selectedColor: 0,
      spinning: true
    }
  },
  methods: {
    toggleSpinner () {
      this.spinning = !this.spinning;
    }
  },
  mounted() {

    setInterval(() => {
      if (this.spinning) {
        this.selectedIcon += 1;
        this.selectedIcon %= this.icons.length;

        this.selectedColor += 1;
        this.selectedColor %= this.colors.length;
      }

    }, 200);
  },
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

#footer {
    font-family: $heading-font;
    font-size: 30px;
    color: #84a9ac;
}
</style>