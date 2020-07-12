<template>
  <div>
<h2>Instructions<span><v-btn @click="focusOn = !focusOn" icon large><v-icon>{{ focusOn ? `mdi-eye` : `mdi-eye-off-outline` }}</v-icon></v-btn></span></h2>
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
        focusOn: true
      }
    },
    methods: {
      style(index) {
        console.log(index);
        if (index == this.focus && this.focusOn) {
          // focused element
          console.log("HERE");
          return {
            color: "black",
            // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.35)",
            backgroundColor: "#f0ece3",
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