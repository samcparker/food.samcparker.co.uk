<template>
  <div>
    <recipe-header :title="details.title" :description="details.description" />
    <hr>
    <v-row>
      <v-col cols="12" md="4"><ingredients :ingredients="details.ingredients" /></v-col>
      <v-col cols="12" md="8"><instructions :instructions="details.instructions" /> </v-col>
    </v-row>
    
    
  </div>
</template>

<script>

import RecipeHeader from "~/components/RecipeHeader.vue";

export default {
  components: {
    RecipeHeader
  },
  props: {
    details: {
      required: true, 
      type: Object
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss">
hr {
  margin: 20px 0 20px 0;
}
h1, h2 {
  color: #26a69a !important;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
  
}
h1 {
  font-size: 50px;
  
  
}
h2 {
  font-size: 30px;

}
</style>