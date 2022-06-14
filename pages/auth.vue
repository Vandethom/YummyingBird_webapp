<template>
  <div>
    <Header class='auth-header' />
    <AuthModal />
  </div>
</template>

<script lang="ts">
import Header from '../components/utils/Header.vue'
import AuthModal from '../components/AuthModal.vue'

export default {
    components: {
      Header,
      AuthModal
    },

    head () {
        return {
            bodyAttrs: {
                class: 'body'
            }
        }
    }
}
</script>

<style lang='scss'>
    .header-container {
      margin-left: 15% !important;
    }
</style>
