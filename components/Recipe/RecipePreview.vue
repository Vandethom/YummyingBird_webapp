<template>
    <div>
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <h3 v-show='recipe.categories'>Catégories :</h3>
        <ul v-for='category in recipe.categories' :key='category'>
            <li>
                {{ category }}
            </li>
        </ul>
        <p v-show='recipe.preparationTime'>{{ recipe.preparationTime }} min</p>
        <h3 v-show='recipe.ingredients'>Ingrédients :</h3>
        <ul v-for='ingredient in recipe.ingredients' :key='ingredient'>
            <li>{{ ingredient }}</li>
        </ul>
        <ul v-show='recipe.vegan || recipe.porkFree || recipe.glutenFree '>
            <p>La recette est sans :</p> 
            <li v-if='recipe.vegan'>Viande</li>
            <li v-if='recipe.porkFree'>Porc</li>
            <li v-if='recipe.glutenFree'>Gluten</li>
        </ul>
        <h3 v-show='recipe.tools'>Matériel :</h3>
        <ul v-for='tool in recipe.tools' :key='tool'>
            <li>{{ tool }}</li>
        </ul>
        <h3 v-show='recipe.steps'>Steps :</h3>
        <ul v-for='step in recipe.steps' :key='step'>
            <li>{{ step }}</li>
        </ul>
        <h3 v-show='recipe.options'>options :</h3>
        <ul v-for='option in recipe.options' :key='option'>
            <li>{{ option }}</li>
        </ul>
        <p v-if='recipe.photo'>{{ recipe.photo }}</p>
    </div>
</template>

<script>
    export default {
        'computed': {
            recipe() {
                return this.$store.state.recipe.recipe
            }
        },

        created() {
            // mutation, though unnused variable, is needed as parameter to subscribe()
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.unsubscribe = this.$store.subscribe((mutation, state) => {
                this.recipe = state.recipe.recipe.title
            });
        }


    }
</script>

<style lang="scss" scoped>

</style>