<template>
  <div>
    <Header />

    <div v-if='!$auth.isAuthenticated'>
        <NuxtLink to='/auth' class='redirection-button'>Créer un compte</NuxtLink>
    </div>

    <div v-else>
        <SidePanel />
        <section class='create-recipe-screen'>
            <CreateRecipePanel />
            <RecipePreview />
        </section>
    </div>
    
    
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

    middleware: ['auth'],

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
        width: 100vw;
        margin: 0;
        height: 100vh;
        overflow: hidden;
    }

    .redirection-button {
        display: grid;
        place-items: center;
        width: 150px;
        height: 46px;
        background-color: #69b954;
        border-radius: 3px;
        border: none;
        margin: 14px auto;
        font-family: 'Barlow';
        font-style: none;
        color: "#f2f2f2f2";
    }

    @media only screen and (max-width: 900px) {
        .createRecipe-container {
            margin: auto;
        }
    }
</style>
