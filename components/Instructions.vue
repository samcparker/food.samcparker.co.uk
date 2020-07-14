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
  }
}
</script>

<style>

</style>