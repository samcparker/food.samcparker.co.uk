<template>
  <div>
<h2>Instructions
  <span >
  <v-btn-toggle mandatory v-model="toggle_exclusive">
          

          <v-btn @click="focusColor = focusA; focusOn = true" small icon >
            <v-icon :color="focusA">mdi-square</v-icon>
          </v-btn>

          <v-btn @click="focusColor = focusB; focusOn = true" small icon>
            <v-icon :color="focusB">mdi-square</v-icon>
          </v-btn>

          <v-btn @click="focusColor = focusC; focusOn = true" small icon>
            <v-icon :color="focusC">mdi-square</v-icon>
          </v-btn>
          <v-btn @click="focusOn = false" small icon>
            <v-icon color="grey">mdi-square-off-outline</v-icon>
          </v-btn>
        </v-btn-toggle></span>
        </h2>
    <div @click="focus = step.step" v-for="(step, index) in instructions" :key="index" :style="style(step.step)" class="mb-2 pa-2">
      <p><strong>{{ step.step }}.</strong> {{ step.desc }}</p>
    </div>
    

  </div>
</template>

<script>
export default {
    props: {
        instructions: Array
    },
    data: () => {
      return {
        focus: 1,
        focusOn: true,
        focusColor: "#f1c5c580",
        focusA: "#f1c5c580",
        focusB: "#8bcdcd80",
        focusC: "#fa26a044"
      }
    },
    methods: {
      style(index) {
        if (index == this.focus && this.focusOn) {

          return {
            color: "black",
            // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.35)",
            backgroundColor: this.focusColor,
            transitionDuration: "1s",
          }
        }
        return {
          color: "black",
          transitionDuration: "1s",
        }
      }
    }
    // computed: {
    //   style(index) {
    //     if (index == this.focus) {
    //       // focused element
    //       return {
    //         color: "red"
    //       }
    //     }
    //     return {
    //       color: "black"
    //     }

    //   }
    // }
}
</script>

<style>

</style>