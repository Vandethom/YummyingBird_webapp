<template>
    <div class='side-panel-container'>
        <!-- <h2>{{ $auth.email }}</h2> -->
        <div class='option-button'>
            <img src="~assets/icons/icon_home.svg" alt="home icon" />
            <NuxtLink class='panel-selection' to="/">Accueil</NuxtLink>
        </div>
        <div class='option-button'>
            <img src="~assets/icons/icon_database.svg" alt="database icon" />
            <NuxtLink class='panel-selection' to="/database">Database</NuxtLink>
        </div>
        <div class='option-button'>
            <img src="~assets/icons/icon_settings.svg" alt="settings icon" />
            <NuxtLink class='panel-selection' to="/database">Paramètres</NuxtLink>
        </div>
        <div class='option-button' @click='logOut'>
            <img
                src="~assets/icons/icon_logout.svg"
                alt="logout icon"
            />
            <NuxtLink class='panel-selection' to="/auth">Déconnexion</NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
       computed: {
        user() {
                const watiwant = this.$store.getters['auth/user']
                console.log(watiwant)
                return this.$store.getters['auth/user'].user.firstName
            }
       },
       methods: {
        logOut() {
            this.$store.dispatch('auth/logOut')
        }
       }
    }
</script>

<style lang="scss" scoped>
    .side-panel-container {
        position: absolute;
        left: 0;
        top: 0;
        background-color: #F7F6CF;
        width: 12vw;
        min-width: 200px;
        height: 100vh;
        border-left: 1px solid black;
        padding-top: 100px;

        h2 {
            display: grid;
            place-items: center;
        }

        .option-button {
            display: flex;
            margin-left: 15%;
            margin-bottom: 25px;
            justify-content: left;

        a {
            display: grid;
            place-items: center;
            margin-left: 18px;
            text-decoration: none;
        }

        }

        .option-button:last-of-type {
            margin-top: 25px;
        }
    }

    @media only screen and (max-width: 900px) {
        .side-panel-container {
            display: none;
        }
    }
</style>
