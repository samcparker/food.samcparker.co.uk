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
      // var colorPref = VueCookies.get('colorPreference');
      // this.toggle_exclusive = this.colors.indexOf(colorPref);
      // if (colorPref == "None") {
      //   this.setColor("None");
      // }
      // else if (colorPref == null) {
      //   this.setColor("#f1c5c580");
      // }
      // else {
      //   this.setColor(colorPref);
      // }

      this.focusedStep = this.getFocusedStep();
      this.getFocusedColor();
      
    },
    methods: {
      setFocusedStep(step) {
        this.focusedStep = step;
        VueCookies.set('focus-' + this.$route.params.slug, step);
      },
      getFocusedStep() {
        return VueCookies.get('focus-' + this.$route.params.slug);
      },
      getFocusedColor() {
        var fc = VueCookies.get('focusColor');
        if (fc == "None") {
          this.toggle_exclusive = this.colors.indexOf(fc);
          this.focusOn = false;
        }
        else if (fc == null) {
          this.toggle_exclusive = 0;
          this.focusOn = true;
        }
        else {
          this.focusOn = true;
          this.focusColor = fc;
          console.log("HEY");
          this.toggle_exclusive = this.colors.indexOf(fc);
        }
      },
      setFocusedColor(color) {
       console.log(color);
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