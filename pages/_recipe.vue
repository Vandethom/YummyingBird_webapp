<template>
    <div>
    <Header />

    <section class='recipe-view'>
        <RecipeHead
            :title='recipe.name'
            :cooking='recipe.cookingTime'
            :duration='recipe.durationTime'
            :parts='recipe.parts'
            :ingredients='recipe.ingredients'
            :steps='recipe.steps'
        />
        <!-- 

        <Photo />
        <Title />
        <Description />
        <Ingredients />
        <Tools />
        <Steps />
        <Options />
        
        -->
    </section>
  </div>
</template>

<script>
import Header from '../components/utils/Header.vue'
import RecipeHead from '../components/public/recipe/RecipeHead.vue'

export default {
    components: {
        Header,
        RecipeHead
    },

    data() {
        return {
            recipe: {},
            ingredients: {}
        }
    },

    mounted() {
            this.$api.getRecipe(this.$route.params.recipe)
                .then((response) => {
                    this.recipe = response
                })
                .catch((error) => {
                    console.log(error)
                }) 
    },
}
</script>

<style lang="scss" scoped>

</style>