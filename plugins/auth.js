import Vue from 'vue'

class AuthService {
    constructor( store ) {
        this.$store = store
    }

    get isAuthenticated() {
        return this.$store.state.auth.isAuthenticated
    }

    get user() {
        return this.$store.state.auth.user
    }

    get id() {
        return this.$store.state.auth.user.sub
    }

    get email () {
        return this.$store.state.auth.user.email
    }
}


export default async ({ store }) => {
    const authService = new AuthService( store )

    Vue.prototype.$auth = authService
    Vue.$auth = authService
    
    await store.dispatch('auth/load')
}