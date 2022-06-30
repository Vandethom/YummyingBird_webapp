<template>
    <div class='auth-modal'>
        <h2>Connexion - Inscription</h2>
        <hr />
        <form class='form-login'>
            <div class='connexion-input'>
                <input
                    id='user-mail'
                    type='email'
                    placeholder='email'
                >
            </div>
            <div class='connexion-input'>
                <input
                    id='user-password'
                    type='password'
                    placeholder='mot de passe'
                >
                <span>
                    <img
                        class='icon-visibility-on'
                        src='../assets/icons/icon_visibility_on.svg'
                        alt='icon eye open'
                        @click='switchPasswordVisibility'
                    >
                </span>
            </div>

            <div class='form-signup'>
                <input id='user-first-name' class='connexion-input' type='text' placeholder='Prénom'>
                <input id='user-last-name' class='connexion-input' type='text' placeholder='Nom'>
            </div>
            
            <a href=''>mot de passe oublié</a>
            <button class='button-login' @click='login'>Connexion</button>
            <button class='button-signup' @click='displaySignUpForm'>Inscription</button>
            <button class='button-create-account' @click='signup'>Créer mon compte</button>
            <p class='auth-message'>Votre compte a été créé correctement, bienvenue parmi nous !</p>
            <p class='auth-message'>Vous pouvez désormais vous connecter pour accéder au site.</p>
        </form>
    </div>
</template>

<script>
    import { gsap } from "gsap"

    export default {
        methods: {
            displaySignUpForm( e ) {
                e.preventDefault()

                gsap.to( '.button-pop-signup-modal', {
                    'display': 'none'
                } )
                gsap.to( '.button-login', {
                    'display': 'none'
                } )
                gsap.to( '.button-create-account', {
                    'display': 'flex'
                } )
                gsap.to('.form-signup', {
                    'display': 'flex',
                    'flex-direction': 'column',
                    'margin': '14px 0 0 -2px'
                } )
            },

            displaySignUpMessage() {
                gsap.to( '.auth-message', {
                    'display': 'inline-block',
                } )
                gsap.to( '.button-login', {
                    'display': 'inline-block',
                } )
                gsap.to( '.button-create-account', {
                    'display': 'none'
                } )
                gsap.to( '.form-signup', {
                    'display': 'none'
                } )
            },
            
            async login( e ) {
                e.preventDefault()
                
                const email = document.getElementById( 'user-mail' ).value
                const password = document.getElementById( 'user-password' ).value
                
                const login = await this.$axios.$post( 'https://yummying-api.herokuapp.com/login', { email, password } )

                delete login.user.password

                this.$store.commit( 'auth/loggedInUser', login )
                this.$router.push( '/' )
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
                
                const signup = await this.$axios.$post( '/signup', { email, password, firstName, lastName } )

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

            .form-signup {
                display: none;

                .button-signup {
                    margin-top: 14px;
                }
            }

            .connexion-input {
                margin: auto;
                display: grid;
                grid-template-columns: 240px 15px;
                place-items: center;

                img {
                    width: 24px;
                    height: 24px;
                    margin-left: -25px;
                    cursor: pointer;
                }
            }

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
                    background: #66C6FE;
                    border-radius: 0 0 4px 4px;
                }
            }

            a {
                align-self: center;
                margin-bottom: 40px;
            }

            .button-create-account {
                display: none;
                background: #F7F6CF;
                justify-content: center;
                align-items: center;
            }

            .auth-message {
                display: none;
                color: #5784BA;
                text-align: center;
                font-size: 18px;
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