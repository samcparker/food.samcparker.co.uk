<template>
  <div>
    <v-row>
      <v-col cols="3">
        <!-- <v-img style="max-height: 100%; object-fit: cover;" src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg">

        </v-img> -->
        <img style="width: 100%; height: 100%; object-fit:cover;" src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg" />
      </v-col>
      <v-col cols="9">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
}
</script>

<style>

</style>