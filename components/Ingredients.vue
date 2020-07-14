<template>
    <div>
        <h2>Ingredients<span><v-btn @click="resetIngredients" icon large><v-icon :style="'transitionDuration: 2s; transform: rotate(' + rot + 'deg);'">mdi-close</v-icon></v-btn></span></h2>
        <v-row class="flex-column pl-2">
            <!-- <v-checkbox :value="values.indexOf(index) != -1 ? true : false" @change="toggleCheckbox(index, $event)" v-for="(ingredient, index) in ingredients" :key="index" style="padding: 0 0 0 0; margin: 0 0 0 0" color="#26a69a" class="mx-2" :label="ingredient.amount * multiplier + ' ' + ingredient.desc"></v-checkbox> -->
            <v-checkbox :value="selectedIngredients.indexOf(index) == -1 ? false : true" @change="toggleIngredient(index, $event)" v-for="(ingredient, index) in ingredients" :key="index" style="padding: 0 0 0 0; margin: 0 0 0 0" color="#26a69a" class="mx-2" :label="ingredient.amount * multiplier + ' ' + ingredient.desc"></v-checkbox>
        </v-row>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            multiplier: 1,
            selectedIngredients: [],
            checked: false,
            rot: 0,
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
    mounted() {
        var key = 'ingredients-' + this.$route.params.slug;

        this.selectedIngredients = this.$localStorage.get(key) || [];
    },
    methods: {
        resetIngredients() {
            var key = 'ingredients-' + this.$route.params.slug;
            this.selectedIngredients = [];
            this.$localStorage.remove(key);
            this.rot += 720;
        },
        toggleIngredient(index, on) {
            var key = 'ingredients-' + this.$route.params.slug;

            var selectedString = this.$localStorage.get(key);


            if (selectedString) { // record exists
                var selectedObject = JSON.parse(selectedString);
                if (on && selectedObject.indexOf(index) == -1) {
                    selectedObject.push(index); // add the index to the list
                }
                else if (!on) {
                    selectedObject = selectedObject.filter(el => { return el != index }); // Remove all 'index's from the list
                }
                
                // Remove value if length is 0 
                if (selectedObject.length == 0) {
                    this.$localStorage.remove(key);
                }
                else {
                    this.$localStorage.set(key, JSON.stringify(selectedObject));
                }
                this.selectedIngredients = selectedObject;
            }
            else { // record does not exist so create a new one
                if (on) {
                    var selectedObject = [index];
                    this.$localStorage.set(key, JSON.stringify(selectedObject));
                    this.selectedIngredients = selectedObject;
                }                
            }
        }
    
    },
    watch: {

    //     doSelectedIngredients() {
    //     var key = 'ingredients-' + this.$route.params.slug;
    //     var selectedIngredientsStr = this.$localStorage.getItem(key);
    //     if (selectedIngredientsStr == null) {
    //         return;
    //     }
    //     this.values = JSON.parse(selectedIngredientsStr);


    //   },
    //   toggleCheckbox(index, value) {
    //       console.log("Values: " + this.values);
    //       var key = 'ingredients-' + this.$route.params.slug;
          
    //       var selectedIngredientsStr = this.$localStorage.getItem(key);
    //         console.log(selectedIngredientsStr);
    //       if (selectedIngredientsStr) {
    //           var selectedIngredientsJSON = JSON.parse(selectedIngredientsStr);

    //           if (value) {
    //               if (selectedIngredientsJSON.indexOf(index) == -1) {
    //                 selectedIngredientsJSON.push(index);
    //               }
                  
    //           }
    //           else {
    //             selectedIngredientsJSON = selectedIngredientsJSON.filter((el) => el != index);
    //           }

    //           console.log(selectedIngredientsJSON);
    //           this.values = selectedIngredientsJSON;
    //         this.$localStorage.setItem(key, JSON.stringify(selectedIngredientsJSON));
    //       }
    //       else {
    //           if (value) {
    //               var selectedIngredientsJSON = [index];
    //               console.log(selectedIngredientsJSON);
    //               this.values = selectedIngredientsJSON;
    //                 this.$localStorage.setItem(key, JSON.stringify(selectedIngredientsJSON));
    //           }
    //       }
         
    //   },
    },

}
</script>

<style lang="scss">
#amount {
    width: 100px;
}


</style>