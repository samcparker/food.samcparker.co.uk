<template>
  <div>
    <v-row id="buttons">
      <v-col style="padding: 10px 10px 10px 10px; z-index: 50;">
        <v-btn @click="isHearted = !isHearted" color="red" large icon><v-icon>{{ isHearted ? `mdi-heart` : `mdi-heart-outline`}}</v-icon></v-btn>  
        <v-btn large icon><v-icon>mdi-share</v-icon></v-btn>  
      </v-col>
    </v-row>
    
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