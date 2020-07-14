<template>
  <div>
    <v-row>
      <v-col cols="3">
        <img style="width: 100%; height: 100%; object-fit:cover;" src="https://hips.hearstapps.com/hmg-prod/images/chicken-fajitas-horizontal-jpg-1522721531.jpg" />
      </v-col>
      <v-col cols="9">
        <h1>{{ title }}</h1>
        <p><span><v-icon color="red">mdi-heart</v-icon></span> {{ heartCount || 0 }}</p>
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
    description: String
  },
  data:() => {
    return {
      heartCount: null
    }
  },
  mounted () {
    var docRef = firebase.firestore().collection("recipes").doc(this.$route.params.slug);
    console.log("Here");
    docRef.onSnapshot((doc) => {
      this.heartCount = doc.data().hearts;
      console.log(this.heartCount);
    });
  }
}
</script>

<style>

</style>