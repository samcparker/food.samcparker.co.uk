<template>
  <div>
    <v-row class="hidden-sm-and-down" v-if="latest" style="max-width: 100%; min-height: 100%" no-gutters>
      <v-col class="pa-2 " cols="6" style="max-height: 100%">
        <!-- <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg"> -->

        <v-img href="/" class="img"
          :src="require('~/static/uploads/' + latest[0].src)">
          <div class="d-flex align-end" style="width: 100%; height: 100%;">
            <v-row class="ma-4 pa-4 showcase-text flex-column" style="background-color: rgb(255, 255, 255, 0.85);">
              <h1>{{ latest[0].title }}</h1>
              <v-btn :href="latest[0].path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
            </v-row>

          </div>
        </v-img>

      </v-col>
      <v-col cols="6">
        <v-row class="pa-2 " no-gutters>
          <v-img class="img"
            :src="require('~/static/uploads/' + latest[1].src)">
            <div class="d-flex align-end mx-0" style="width: 100%; height: 100%">
              <v-row class="ma-4 pa-4  showcase-text  flex-column" style="background-color: rgb(255, 255, 255, 0.85);">
                <h1>{{ latest[1].title }}</h1>
                <v-btn :href="latest[1].path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
              </v-row>
            </div>
          </v-img>
        </v-row>
        <v-row class="pa-2 " no-gutters>
          <v-img class="img"
            :src="require('~/static/uploads/' + latest[2].src)">
            <div class="d-flex align-end mx-0" style="width: 100%; height: 100%;">
              <v-row class="ma-4 pa-4  showcase-text flex-column" style="background-color: rgb(255, 255, 255, 0.85);">
                <h1>{{ latest[2].title }}</h1>
                <v-btn :href="latest[2].path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
              </v-row>
            </div>
          </v-img>
        </v-row>
      </v-col>
    </v-row>

    <v-carousel class="hidden-md-and-up">
      <v-carousel-item
        v-for="(recipe, index) in latest.slice(0, 3)"
        :key="index"
        :src="require('~/static/uploads/' + recipe.src)"
        cycle
        touch
        show-arrows="false"
      >
        <v-row class="flex-column ma-4 " style="width: auto; max-width: 61%; height: 100%; position: relative;">
          <div class="pa-2" style="background-color: white; bottom: 0; position: relative;">
            <h1>{{ recipe.title }}</h1>
            <v-btn :href="recipe.path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
          </div>
          
        </v-row>
      </v-carousel-item>
    </v-carousel>

    <v-row class="ma-0">
      <div justify="end">
        <v-btn-toggle mandatory v-model="toggle_exclusive">
          <v-btn @click="selected = 'latest'" style="width: 130px" class="mr-2">
            Latest
          </v-btn>
          <v-btn @click="selected = 'mostHearts'" style="width: 130px">
            Top Hearts
          </v-btn>
        </v-btn-toggle>
      </div>
      <div v-if="selected == 'latest'">
        <div v-for="(recipe, index) in latest" :key="index">
          <v-row>
            <v-col cols="3">
              <img style="width: 100%"
                :src="require('~/static/uploads/' + recipe.src)">
            </v-col>
            <v-col cols="9">
              <h2><a :href="recipe.path">{{ recipe.title }}</a></h2>
              <p>{{ recipe.description }} </p>
            </v-col>
          </v-row>
        </div>
      </div>
      <div v-else="">
        <div v-for="(recipe, index) in mostHearts" :key="index">
          <v-row>
            <v-col cols="3">
              <img style="width: 100%"
                :src="require('~/static/uploads/' + recipe.src)">
            </v-col>
            <v-col cols="9">
              <h2><a :href="recipe.path">{{ recipe.title }}</a></h2>
              <p>{{ recipe.description }} </p>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-row>

  </div>
</template>

<script>
  export default {
    head() {
      return {
        script: [{
          src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
        }],
      };
    },
    data: () => {
      return {
        selected: "latest",
        toggle_exclusive: undefined
      }
    },
    async asyncData({
      $content,
      params
    }) {
      const latest = await $content('recipes').fetch();
      const mostHearts = await $content('recipes').fetch();

      return {
        latest,
        mostHearts
      };
    },
    components: {

    }
  }

</script>

<style lang="scss">
  .img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
    max-height: 400px;
  }

  .showcase-text {

    transition-duration: 1s;
    opacity: 1;
  }


  h1 {
    font-family: $heading-font;
    font-size: 30px;
    color: #26a69a
  }

</style>
