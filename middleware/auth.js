export default function( context ) {
    const signedInUser = context.store.getters['auth/isAuthenticated']

    if  (context.route.name === 'auth' ) return

    if ( !signedInUser ) {
        window.location.href = '/auth'
    }
}