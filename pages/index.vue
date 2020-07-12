<template>
  <div>
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

</style>