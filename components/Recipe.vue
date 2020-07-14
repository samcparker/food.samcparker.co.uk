<template>
  <div>
    <recipe-buttons/>
    
    <recipe-header :title="details.title" :description="details.description" />
    <!-- <hr> -->
    <v-row>
      <v-col cols="12" md="4"><ingredients :ingredients="details.ingredients" /></v-col>
      <v-col cols="12" md="8"><instructions :instructions="details.instructions" /> </v-col>
    </v-row>
    
    
  </div>
</template>

<script>

import RecipeHeader from "~/components/RecipeHeader.vue";
import RecipeButtons from "~/components/RecipeButtons.vue";

export default {
  components: {
    RecipeHeader, RecipeButtons
  },
  data: () => {
    return {
      isHearted: false
    }
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

  #buttons {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 50;
  }
</style>