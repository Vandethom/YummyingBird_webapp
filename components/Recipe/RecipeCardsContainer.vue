<template>
    <div class='card-container'>
        <article v-for='recipe in recipes' :key='recipe.uuid'>
            <RecipeCard 
                :title='recipe.title'
                :description='recipe.description'
                :duration='recipe.preparationTime'
                :glutenfree='recipe.glutenFree'
                :porkfree='recipe.porkFree'
                :vegan='recipe.vegan'
                :image='recipe.imageUrl'
            />
        </article>
    </div>
</template>

<script>
    import RecipeCard from './RecipeCard.vue'

    export default {
        components: {
            RecipeCard
        },

        data() {
            return {
                recipes: []
            }
        },
        
        beforeMount() {
            this.$axios.$get('/recipes')
                .then((res) => {
                    const parsedData = JSON.parse(JSON.stringify(res))
                    this.recipes = parsedData
                    console.log(this.recipes)
                })     
        }
    }
</script>

<style lang="scss" scoped>
    .card-container {
        display: grid;
        grid-template-columns: 36vw 36vw;
        grid-auto-rows: 28vh;

        article {
            margin-left: 16vw;
        }
    }
</style>