<template>
  <div>
    <Header />
    <SidePanel />
    <section class='create-recipe-screen'>
        <CreateRecipePanel />
        <RecipePreview />
    </section>
  </div>
</template>

<script lang="ts">
import CreateRecipePanel from '../components/Recipe/CreateRecipePanel.vue'
import Header from '../components/utils/Header.vue'
import RecipePreview from '../components/Recipe/RecipePreview.vue'
import SidePanel from '../components/utils/SidePanel.vue'

export default {
    components: {
        CreateRecipePanel,
        Header,
        RecipePreview,
        SidePanel
    },
    
    middleware: 'auth',

    head () {
        return {
            bodyAttrs: {
                class: 'body'
            }
        }
    }
}
</script>

<style lang='scss' scoped>
    .create-recipe-screen {
        display: flex;
    }
</style>
