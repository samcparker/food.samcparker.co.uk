<template>
  <div>
    <h2>Instructions
      <span >
      <v-btn-toggle mandatory v-model="toggle_exclusive">
        <v-btn  v-for="(color, index) in colors" :key="index" @click="setFocusedColor(color)" small icon >
          <v-icon :color="color">{{ color != "None" ? `mdi-square` : `mdi-square-off-outline` }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      </span>
    </h2>
    <div @click="setFocusedStep(step.step)" v-for="(step, index) in instructions" :key="index" :style="style(step.step)" class="mb-2 pa-2">
      <p><strong>{{ step.step }}.</strong> {{ step.desc }}</p>
    </div>
  </div>
</template>

<script>
import VueCookies from 'vue-cookies';

export default {
    props: {
        instructions: Array
    },
    data: () => {
      return {
        focusedStep: 1,
        focusOn: true,
        focusColor: "#f1c5c580",
        toggle_exclusive: undefined,
        colors: ["#f1c5c580", "#8bcdcd80", "#fa26a044", "None"]
      }
    },
    mounted () {
      this.doFocusedStep();
      this.doFocusedColor();
      
    },
    methods: {
      setFocusedStep(step) {
        if (this.focusOn) {
          this.focusedStep = step;
          VueCookies.set('focus-' + this.$route.params.slug, step);
        }
      },
      doSelectedIngredients() {

      },
      setSelectedIngredients() {

      },
      addSelectedIngredient(index) {
        var key = 'ingredients-' + this.$route.params.slug;

        var selectedIngredients = VueCookies.get(key);
        if (selectedIngredients == null) {
          VueCookies.set(key, [index]);
        }
        else { // cookie does exist
          selectedIngredients.add(index);
        }
      },
      removeSelectedIngredient(index) {

      },
      doFocusedStep() {
        this.focusedStep = VueCookies.get('focus-' + this.$route.params.slug) || 1;
      },
      doFocusedColor() {
        var fc = VueCookies.get('focusColor');
        if (fc == "None") { // "None" colour is chosen so show final index and turn focus off
          this.toggle_exclusive = this.colors.indexOf(fc);
          this.focusOn = false;
        }
        else if (fc == null) { // No colour has been selected, so show default colour at index 0 and turn focus on
          this.toggle_exclusive = 0;
          this.focusOn = true;
        }
        else { // A colour has been selected so turn focus on and set focus colour to whatever
          this.focusOn = true;
          this.focusColor = fc;
          this.toggle_exclusive = this.colors.indexOf(fc);
        }
      },
      setFocusedColor(color) {
        if (color == "None") {
          this.focusOn = false;
          VueCookies.set('focusColor', "None");
        }
        else {
          this.focusColor = color;
          this.focusOn = true;
          VueCookies.set('focusColor', color);
        }
        
      },
      style(index) {
        if (index == this.focusedStep && this.focusOn) {

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