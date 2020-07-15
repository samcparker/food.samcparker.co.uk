<template>
  <div>
    <v-row>
      <v-col cols="3">
        <img style="width: 100%; height: 100%; object-fit:cover;" :src="src" />
      </v-col>
      <v-col cols="9">
        <h1 class="mb-0 pb-0">{{ title }}</h1>
        <p class="mb-0 pb-0">
          <span>
            <v-btn @click="$emit('heart')" icon>
              <v-icon color="red">{{ isHearted ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
            </v-btn>
             <span v-if="heartCount">{{ heartCount }} hearts</span>
              <span v-else>
                <v-progress-circular
                  :size="20"
                  :width="2"
                  indeterminate
                ></v-progress-circular>
              </span>

            </span> 
            
            
            </p>
        <p>{{ description }}</p>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  props: {
    title: String,
    description: String,
    heartCount: Number,
    isHearted: Boolean,
    src: String
  },
  data:() => {
    return {
     
    }
  },
  mounted () {
    
  }
}
</script>

<style>

</style>