<template>
  <div>
    <h2>Instructions
      <span >
      <v-btn-toggle mandatory v-model="toggle_exclusive">
        <v-btn v-for="(color, index) in colors" :key="index" @click="setFocusColor(color)" small icon >
          <v-icon :color="color">{{ color != "None" ? `mdi-square` : `mdi-square-off-outline` }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      </span>
    </h2>
    <!-- <div @click="setFocusedStep(step.step)" v-for="(step, index) in instructions" :key="index" :style="style(step.step)" class="mb-2 pa-2"> -->
    <div @click="setFocusedStep(step.step)" v-for="(step, index) in instructions" :key="index" :style="pStyle(step.step)" class="mb-2 pa-2">
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
        focusedStep: 1,
        focusColor: undefined,
        toggle_exclusive: undefined,
        colors: ["#f1c5c580", "#8bcdcd80", "#fa26a044", "None"]
      }
    },
    mounted () {
      var focusColor = this.getFocusColor();
      this.toggle_exclusive = this.colors.indexOf(focusColor);
      this.focusedStep = this.getFocusedStep();
    },
    watch: {
      
    },
    methods: {
      setFocusColor(focusColor) {
        this.$localStorage.set("focusColor", focusColor);
      },
      getFocusColor() {
        return this.$localStorage.get("focusColor") || this.colors[0];
      },
      setFocusedStep(stepNumber) {
        if (this.getFocusColor() == "None") {
          return;
        }
        this.$localStorage.set("focusedStep-" + this.$route.params.slug, stepNumber);
        this.focusedStep = stepNumber;
      },
      getFocusedStep() {
        return this.$localStorage.get("focusedStep-" +  this.$route.params.slug) || 1;
      },
      pStyle(stepNumber) {
        var original = {
          color: "black",
          transitionDuration: "1s"
        };
        if (this.$localStorage && this.focusedStep == stepNumber) {
          if (this.getFocusColor() != "None") {
            return Object.assign({}, original, {backgroundColor: this.getFocusColor()});
          }
        }
         return Object.assign({}, original, {});
      }
      
      // setFocusedStep(step) {
      //   if (this.focusOn) {
      //     this.focusedStep = step;

      //     this.$localStorage.setItem('focus-' + this.$route.params.slug, step);
      //   }
      // },
      // doFocusedStep() {
      //   this.focusedStep = this.$localStorage.getItem('focus-' + this.$route.params.slug) || 1;
      // },
      // doFocusedColor() {
      //   var fc = this.$localStorage.getItem('focusColor');
      //   if (fc == "None") { // "None" colour is chosen so show final index and turn focus off
      //     this.toggle_exclusive = this.colors.indexOf(fc);
      //     this.focusOn = false;
      //   }
      //   else if (fc == null) { // No colour has been selected, so show default colour at index 0 and turn focus on
      //     this.toggle_exclusive = 0;
      //     this.focusOn = true;
      //   }
      //   else { // A colour has been selected so turn focus on and set focus colour to whatever
      //     this.focusOn = true;
      //     this.focusColor = fc;
      //     this.toggle_exclusive = this.colors.indexOf(fc);
      //   }
      // },
      // setFocusedColor(color) {
      //   if (color == "None") {
      //     this.focusOn = false;
      //     this.$localStorage.setItem('focusColor', "None");
      //   }
      //   else {
      //     this.focusColor = color;
      //     this.focusOn = true;
      //     this.$localStorage.setItem('focusColor', color);
      //   }
        
      },
      // style(index) {
      //   if (index == this.focusedStep && this.focusOn) {

      //     return {
      //       color: "black",
      //       // boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.35)",
      //       backgroundColor: this.focusColor,
      //       transitionDuration: "1s",
      //     }
      //   }
      //   return {
      //     color: "black",
      //     transitionDuration: "1s",
      //   }
      // }
    
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