<template>
  <div>
    <v-row style="max-width: 100%; min-height: 100%" no-gutters> 
      <v-col class="pa-2 " cols="6" style="max-height: 100%">
        <!-- <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg"> -->
   
          <v-img href="/" class="img" src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg">
            <div class="d-flex align-end" style="width: 100%; height: 100%;" >
              <v-row class="ma-4 pa-4 showcase-text" style="background-color: rgb(255, 255, 255, 0.85);">
<h1>{{ recipes[0].title }}</h1>
              <p>{{ recipes[0].description }}</p>
              <v-btn :href="recipes[0].path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
              </v-row>
              
            </div>
          </v-img>
   
      </v-col>
      <v-col cols="6">
        <v-row class="pa-2 " no-gutters>
            <v-img class="img" src="data:image/jpeg;base64,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" > 
            <div class="d-flex align-end mx-0" style="width: 100%; height: 100%" >
                          <v-row class="ma-4 pa-4  showcase-text " style="background-color: rgb(255, 255, 255, 0.85);">
<h1>{{ recipes[1].title }}</h1>
              <p>{{ recipes[1].description.substring(0, 100) + "..." }}</p>
              <v-btn :href="recipes[0].path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
              </v-row>
          </div>
            </v-img> 
        </v-row>
        <v-row class="pa-2 " no-gutters>
            <v-img class="img" src="https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/simple_fish_dish_98008_16x9.jpg"> 
            <div class="d-flex align-end mx-0" style="width: 100%; height: 100%;" >
                          <v-row class="ma-4 pa-4  showcase-text " style="background-color: rgb(255, 255, 255, 0.85);">
<h1>{{ recipes[2].title }}</h1>
              <p>{{ recipes[2].description.substring(0, 100) + "..." }}</p>
              <v-btn :href="recipes[0].path" color="#26a69a" style="color: white">I'm Hungry</v-btn>
              </v-row>
          </div>
            </v-img> 
        </v-row>
      </v-col>
    </v-row>
    
    <div v-for="(recipe, index) in recipes" :key="index">
      <v-row>
        <v-col cols="3">
          <img style="width: 100%" src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg" />
        </v-col>
        <v-col cols="9">
          <h2><a :href="recipe.path">{{ recipe.title }}</a></h2>
          <p>{{ recipe.description }} </p>
        </v-col>
      </v-row>
      
      
    </div>
  </div>
</template>

<script>



export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  async asyncData ({ $content, params }) {
    const recipes = await $content('recipes').fetch();
    console.log("Recipes: ");
    console.log(recipes);
    return { recipes };
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
}

.showcase-text {
 
  transition-duration: 1s;
  opacity: 1;
}

.showcase-text:hover {
  opacity: 0.2;
}

h1 {
  font-family: $heading-font;
    font-size: 30px;
    color: #26a69a
}
</style>