<template>
  <v-row id="buttons">
      <v-col style="padding: 10px 10px 10px 10px; z-index: 50;">
        <v-btn @click="toggleHeart" color="red" large icon><v-icon>{{ isHearted ? `mdi-heart` : `mdi-heart-outline`}}</v-icon></v-btn>  
        <v-btn large icon><v-icon>mdi-share</v-icon></v-btn>  
      </v-col>
    </v-row>
</template>

<script>
import firebase from "firebase/app";

export default {
  data: () => {
    return {
      isHearted: undefined,
    }
  },
  mounted() {
    var key = 'hearted-' + this.$route.params.slug;
    if (this.$localStorage.get(key, false)) {
      this.isHearted = true;
    }
  },
  methods: {
    toggleHeart() {
      var key = 'hearted-' + this.$route.params.slug;
      if (this.isHearted) {
        // Remove heart
        this.isHearted = false;
        this.$localStorage.remove(key);
        
        var docRef = firebase.firestore().collection("recipes").doc(this.$route.params.slug);
        docRef.update({
          hearts: firebase.firestore.FieldValue.increment(-1) 
        });
      }
      else {
        // Add heart
        this.isHearted = true;
        if (this.$localStorage.get(key, false)) {
          this.isHearted = true;
          return;
        }
        this.$localStorage.set(key, true);

        var docRef = firebase.firestore().collection("recipes").doc(this.$route.params.slug);
        docRef.update({
          hearts: firebase.firestore.FieldValue.increment(1) 
        });
        // docRef.get().then((doc) => {
        //   if (doc.exists) {
        //     console.log("Document data: ", doc.data());

        //   }
        //   else {
        //     console.log("No such document!");
        //   }
        // }).catch(() => {
        //   console.log("Error getting document: ", error)
        // });
      }
    }
  }
}
</script>

<style>

</style>