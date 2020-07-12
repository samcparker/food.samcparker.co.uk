<template>
  <div>
    <div v-for="(recipe, index) in recipes" :key="index">
      <h2><a :href="recipe.path">{{ recipe.title }}</a></h2>
      <p>{{ recipe.description }} </p>
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