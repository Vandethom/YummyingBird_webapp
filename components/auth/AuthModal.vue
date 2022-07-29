<template>
    <div class='auth-modal'>
        <h2>Connexion - Inscription</h2>
        <hr />
        <form v-if='step === steps.register' @submit.prevent="register">
            <input 
                v-model='registerForm.email'
                type='email'
                placeholder='Email'
                class='form-control'
            >
            <input 
                v-model='registerForm.password'
                type="password"
                placeholder='Password'
                class='form-control'
            >
            <button type='submit' class='button-green'>Créer mon compte</button>
            <p class='switch-popup' @click='displayPopUp'>Vérifier mon code</p>
        </form>

        <form v-else @submit.prevent="confirm">
            <input
                v-model='confirmForm.email'
                type='email'
                placeholder='Email'
                class='form-control'
            >
            <input 
                v-model='confirmForm.code'
                placeholder='Code'
                class='form-control'
            >
            <button type='submit' class='button-green'>Vérifier le code</button>
            <p class='switch-popup' @click='displayPopUp'>Créer un compte</p>
        </form>
    </div>
</template>

<script>
    const steps = {
        register: 'REGISTER',
        confirm: 'CONFIRM'
    }

    export default {
        data() {
            return {
                mail: '',
                password: '',
                steps: { ...steps },
                step: steps.register,
                registerForm: {
                    email: '',
                    password: '',
                },
                confirmForm: {
                    email: '',
                    code: ''
                }
            }
        },

        methods: {
            async confirm() {
                try {
                    await this.$store.dispatch( 'auth/confirmRegistration', this.confirmForm )
                    await this.$store.dispatch( 'auth/logIn', this.registerForm )
                    this.$router.push( '/' )
                } catch (error ) {
                    console.log( {error } )
                }
            },

            displayPopUp() {
                if ( this.step === 'REGISTER' ) {
                    this.step = 'CONFIRM'
                } else {
                    this.step = 'REGISTER'
                }
            },

            async register() {
                try {
                    await this.$store.dispatch( 'auth/register', this.registerForm )
                    this.confirmForm.email = this.registerForm.email
                    this.step = this.steps.confirm
                } catch ( error ) {
                    console.log( { error })
                }
            },

            switchPasswordVisibility() {
                const passwordInput = document.getElementById( 'user-password' )

                if ( passwordInput.type === 'password' ) {
                    passwordInput.type = 'text'
                } else {
                    passwordInput.type = 'password'
                }
            },
            
            async signup(e) {
                e.preventDefault()

                const email = document.getElementById( 'user-mail' ).value
                const password = document.getElementById( 'user-password' ).value
                const firstName = document.getElementById( 'user-first-name' ).value
                const lastName = document.getElementById( 'user-last-name' ).value
                
                const signup = await this.$axios.$post(
                        'https://nl968j615m.execute-api.eu-west-3.amazonaws.com/dev/auth/signup',
                        { email, password, firstName, lastName } 
                    )

                delete signup.user.password

                this.$store.commit( 'auth/loggedInUser', signup )
                this.$router.push( '/' )
            },
        }
    }
</script>

<style lang="scss" scoped>
    .auth-modal {
        background: #f1ecec;
        border: 1px solid black;
        border-radius: 6px;
        margin: auto;
        margin-top: 4vh;
        width: 32vw;
        padding-bottom: 8vh;

        h2 {
            display: grid;
            place-items: center;
        }
        hr {
            width: 65%;
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
        
    
        .switch-popup {
            text-align: center;
            color: #4422db;
        }
    }

    @media only screen and ( max-width: 1280px ) {
        .auth-modal {
            width: 80%;
            margin-top: 40px;
        }
    }

    @media only screen and ( max-width: 480px ) {
        .auth-modal {
            width: 95vw;
        }
    }
</style>