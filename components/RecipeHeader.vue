<template>
  <div>
    <v-row>
      <v-col cols="3">
        <img style="width: 100%; height: 100%; object-fit:cover;" src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg" />
      </v-col>
      <v-col cols="9">
        <h1>{{ title }}</h1>
        <p>
          <span>
            <!-- <v-btn icon>{{ heartCount || "..." }}
              <v-icon left color="red">mdi-heart</v-icon>
            </v-btn> -->
            <v-btn @click="$emit('heart')" class="ma-2" :color="isHearted ? 'red' : 'white'" :style="isHearted ? 'color: white' : 'color: red'">
              <v-icon dark left>{{ isHearted ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
              <span v-if="heartCount">{{ heartCount }}</span>
              <span v-else>
                <v-progress-circular
                  :size="20"
                  :width="2"
                  indeterminate
                  :color="isHearted ? 'white' : 'red'"
                ></v-progress-circular>
              </span>
            </v-btn>

            </span> </p>
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
    isHearted: Boolean
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