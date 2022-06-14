<template>
    <div class='auth-modal'>
        <h2>Connexion - Inscription</h2>
        <hr />
        <form>
            <input id='user-mail' type='email' placeholder='email'>
            <input id='user-password' type='password' placeholder='mot de passe'>
            <a href=''>mot de passe oublié</a>
            <button class='button-login' @click='login'>Connexion</button>
            <button class='button-signup'>Inscription</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            async login(e) {
                e.preventDefault()
                
                const email = document.getElementById( 'user-mail' ).value
                const password = document.getElementById( 'user-password' ).value
                
                const login = await this.$axios.$post('/login', { email, password} )

                delete login.user.password

                this.$store.commit( 'auth/loggedInUser', login )
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
                width: 220px;
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
</style>