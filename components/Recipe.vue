<template>
  <div>
    
    
    <recipe-header v-on:heart="toggleHeart" :title="details.title" :description="details.description" :heartCount="heartCount" :isHearted="isHearted" :src="details.src"/>
    <v-divider />
    <v-row>
      <v-col cols="12" md="4"><ingredients :ingredients="details.ingredients" /></v-col>
      <v-col  cols="12" md="1">
        <v-divider class="hidden-sm-and-down" vertical />
        <v-divider class="hidden-md-and-up" />
      </v-col>
      <v-col cols="12" md="7"><instructions :instructions="details.instructions" /> </v-col>
    </v-row>
    
    
  </div>
</template>

<script>
import firebase from "firebase/app";
import RecipeHeader from "~/components/RecipeHeader.vue";

export default {
  components: {
    RecipeHeader,
  },
  data: () => {
    return {
      isHearted: false,
      heartCount: null
    }
  },
  props: {
    details: {
      required: true, 
      type: Object
    }
  },
  mounted () {
    var key = 'hearted-' + this.$route.params.slug;

    var docRef = firebase.firestore().collection("recipes").doc(this.$route.params.slug);
    this.isHearted = this.$localStorage.get(key, false) == "true"; // get boolean value as it is stored as string in localstorage

    docRef.onSnapshot((doc) => {
      this.heartCount = doc.data().hearts;
      console.log(this.heartCount);
    });
  },
  methods: {
    toggleHeart() {
      var key = 'hearted-' + this.$route.params.slug;
      if (this.isHearted) {
        this.isHearted = false;
        this.$localStorage.set(key, false);

        var docRef = firebase.firestore().collection("recipes").doc(this.$route.params.slug);
        docRef.update({
          hearts: firebase.firestore.FieldValue.increment(-1)
        });
      }
      else {
        this.isHearted = true;
        this.$localStorage.set(key, true);

        var docRef = firebase.firestore().collection("recipes").doc(this.$route.params.slug);
        docRef.update({
          hearts: firebase.firestore.FieldValue.increment(1)
        });
      }
    }
  }
}
</script>

<style lang="scss">
hr {
  margin: 20px 0 20px 0;
}
h1, h2 {
  color: #26a69a !important;
  margin-bottom: 10px;
  font-family: 'Courier New', Courier, monospace;
  
}
h1 {
  font-size: 50px;
}
h2 {
  font-size: 30px;

}

  #buttons {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 50;
  }
</style>