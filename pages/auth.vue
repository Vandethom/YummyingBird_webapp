<template>
  <div>
    <Header class='auth-header' />
    <AuthModal />
  </div>
</template>

<script lang="ts">
import Header from '../components/utils/Header.vue'
import AuthModal from '../components/auth/AuthModal.vue'

export default {
    components: {
      AuthModal,
      Header
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

<style lang='scss' scoped>
    .body {
      margin: 0;
    }
    .header-container {
      margin-left: 15%;
    }
</style>
