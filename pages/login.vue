<template>
  <div>
    <Header class='auth-header' />
    <div v-if='!$auth.isAuthenticated'>
        <form @submit.prevent='login'>
          <input v-model='form.email' type='email' placeholder='Email' class='form-control' />
          <input
            v-model='form.password'
            type='password'
            placeholder='Password'
            class='form-control'
          />
          <button type='submit' class='button--green'>Se connecter</button>
        </form>

      <NuxtLink to='/register' class='redirection-button'>Créer un compte</NuxtLink>
    </div>
  </div>
</template>

<script lang='ts'>
  import Header from '../components/utils/Header.vue'

  export default {
  components: {
    Header
  },

  data() {
    return {
    form: {
      email: '',
      password: ''
    }}
  },

      head () {
          return {
              bodyAttrs: {
                  class: 'body'
              }
          }
      },
  
      methods: {
        async login() {
          try {
            await this.$store.dispatch('auth/logIn', this.form)
            this.$router.push('/')
          } catch (error) {
            console.log({ error })
          }
        }
  }
}
    

</script>

<style lang='scss' scoped>
    .header-container {
      margin-left: 15%;
    }

    form {
            display: flex;
            flex-direction: column;
            width: 60%;
            margin: auto;
            margin-top: 40px;

            input {
                width: 240px;
                height: 40px;
                border: none;
                margin: auto;
                padding-left: 10px;
                font-family: 'Barlow Light';
                font-size: 18px;
                
                &:first-of-type {
                    background: #B6D8F2;
                    border-radius: 4px 4px 0 0;
                }

                &:nth-of-type(2) {
                    margin-bottom: 14px;
                    background: #66C6FE;
                    border-radius: 0 0 4px 4px;
                }
            }

            a {
                align-self: center;
                margin-bottom: 40px;
            }

            button {
                margin: auto;
                margin-bottom: 8px;
                width: 220px;
                height: 40px;
                border: none;
                border-radius: 4px;
                font-family: 'Barlow Condensed';
                font-weight: bold;
                font-size: 22px;

                &:first-of-type {
                    background: #5784BA;
                }

                &:nth-of-type(2) {
                    height: 30px;
                    background: #F7F6CF;
                }
            }
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
</style>
