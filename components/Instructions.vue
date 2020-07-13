<template>
  <div>
    <h2>Instructions
      <span >
      <v-btn-toggle mandatory v-model="toggle_exclusive">
        <v-btn @click="setColor(color)" v-for="(color, index) in colors" :key="index" small icon >
          <v-icon :color="color">{{ color != "None" ? `mdi-square` : `mdi-square-off-outline` }}</v-icon>
        </v-btn>
      </v-btn-toggle>
      </span>
    </h2>
    <div @click="focus = step.step" v-for="(step, index) in instructions" :key="index" :style="style(step.step)" class="mb-2 pa-2">
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
        focus: 1,
        focusOn: true,
        focusColor: undefined,
        toggle_exclusive: undefined,
        colors: ["#f1c5c580", "#8bcdcd80", "#fa26a044", "None"]
      }
    },
    mounted () {
      var colorPref = VueCookies.get('colorPreference');
      this.toggle_exclusive = this.colors.indexOf(colorPref);
      if (colorPref == "None") {
        this.setColor("None");
      }
      else {
        this.setColor(colorPref);
      }
      
    },
    methods: {
      setColor(color) {
        if (color == "None") {
          this.focusOn = false;
          VueCookies.set('colorPreference', "None");
        }
        else {
          this.focusOn = true;
          this.focusColor = color
          VueCookies.set('colorPreference', color);
        }
      },
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