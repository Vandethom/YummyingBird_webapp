<template>
  <div>
    <Header />
    <SidePanel />
    <RecipeCardsContainer />
  </div>
</template>

<script lang="ts">
import Header from '../components/utils/Header.vue'
import SidePanel from '../components/utils/SidePanel.vue'
import RecipeCardsContainer from '../components/Recipe/RecipeCardsContainer.vue'

export default {
    components: {
      Header,
      SidePanel,
      RecipeCardsContainer
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

</style>
