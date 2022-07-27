export const state = () => ({
    user: {},
    signedIn: false
})

export const getters = {
    user(state: any) {
        return state.user
    }
}

export const mutations = {
    loggedInUser(state: any, user: string) {
        state.user = user
    },

    loggedOffUser(state: any) {
        state.user = {}
    }
}
