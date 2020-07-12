<template>

  <recipe :details="details" />

</template>

<script>
import Recipe from "~/components/Recipe.vue";
export default {
  async asyncData ({ $content, params }) {
    const details = await $content('recipes', params.slug).fetch();

    return { details };
  },

    components: {
        Recipe
    }
}
</script>

<style>
  body {
    background-color: white;
  }
</style>