<template>
    <div>
        <h2>Ingredients</h2>
        <v-row class="flex-column pl-2">
            <v-checkbox :value="values.indexOf(index) != -1 ? true : false" @change="toggleCheckbox(index, $event)" v-for="(ingredient, index) in ingredients" :key="index" style="padding: 0 0 0 0; margin: 0 0 0 0" color="#26a69a" class="mx-2" :label="ingredient.amount * multiplier + ' ' + ingredient.desc"></v-checkbox>
        </v-row>
    </div>
</template>

<script>
import VueCookies from 'vue-cookies';

export default {
    data: () => {
        return {
            multiplier: 1,
            values: []
        }
    },
    props: {
        ingredients: {
            required: true,
            type: Array
        }
    },
    computed: {
        getValue: () => {
            return this.multiplier;
        }
    },
    methods: {
        increase(amount) {
            this.multiplier = parseInt(this.multiplier) + amount;
            if (this.multiplier < 1) {
                this.multiplier = 1;
            }
        },
    doSelectedIngredients() {
        var key = 'ingredients-' + this.$route.params.slug;
        var selectedIngredientsStr = VueCookies.get(key);
        if (selectedIngredientsStr == null) {
            return;
        }
        this.values = JSON.parse(selectedIngredientsStr);


      },
      toggleCheckbox(index, value) {
          console.log("Values: " + this.values);
          var key = 'ingredients-' + this.$route.params.slug;
          
          var selectedIngredientsStr = VueCookies.get(key);
            console.log(selectedIngredientsStr);
          if (selectedIngredientsStr) {
              var selectedIngredientsJSON = JSON.parse(selectedIngredientsStr);

              if (value) {
                  if (selectedIngredientsJSON.indexOf(index) == -1) {
                    selectedIngredientsJSON.push(index);
                  }
                  
              }
              else {
                selectedIngredientsJSON = selectedIngredientsJSON.filter((el) => el != index);
              }

              console.log(selectedIngredientsJSON);
              this.values = selectedIngredientsJSON;
            VueCookies.set(key, JSON.stringify(selectedIngredientsJSON));
          }
          else {
              if (value) {
                  var selectedIngredientsJSON = [index];
                  console.log(selectedIngredientsJSON);
                  this.values = selectedIngredientsJSON;
                    VueCookies.set(key, JSON.stringify(selectedIngredientsJSON));
              }
          }
         
      },
    },
    mounted (){
        this.doSelectedIngredients();
    }
}
</script>

<style lang="scss">
#amount {
    width: 100px;
}


</style>