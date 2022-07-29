import { Auth } from 'aws-amplify'

export const state = () => ({
    user: {},
    signedIn: false
})

export const getters = {
    user(state) {
        return state.user
    }
}

export const mutations = {
    set( state, user ) {
        state.isAuthenticated = !!user
        state.user.attributes = user
    },

    loggedInUser( state, user ) {
        state.user.attributes = user
    },

    loggedOffUser( state ) {
        state.user.attributes = {}
    }
}

export const actions = {
    async load({ commit }) {
        try {
            const user = await Auth.currentAuthenticatedUser()
            commit( 'set', user )
            
            return user
        } catch ( error ) {
            commit('set', null)
        }
    },

    async register( _, { email, password } ) {
        const user = await Auth.signUp({
            username: email,
            password
        })

        return user
    },

    async confirmRegistration( _, { email, code } ) {
        return await Auth.confirmSignUp( email, code )
    },

    async logIn( { commit }, { email, password } ) {
        const user = await Auth.signIn( email, password )
        commit( 'set', user.attributes )
        
        return user
    },

    async logOut( { commit } ) {
        await Auth.signOut()
        commit( 'set', null )
    }
}