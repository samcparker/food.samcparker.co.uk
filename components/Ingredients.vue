<template>
    <div>
        <h2>Ingredients</h2>
        <v-row class="flex-column pl-2">
            <v-checkbox v-for="(ingredient, index) in ingredients" :key="index" style="padding: 0 0 0 0; margin: 0 0 0 0" color="#26a69a" class="mx-2" :label="ingredient.amount * multiplier + ' ' + ingredient.desc"></v-checkbox>
        </v-row>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            multiplier: 1,
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
        }
    },
    mounted (){
        this.$nextTick(() => {
            console.log(this.ingredients);
        });
    }
}
</script>

<style lang="scss">
#amount {
    width: 100px;
}


</style>