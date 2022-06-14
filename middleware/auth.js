export default function ({ store, redirect }) {
    if (!store.state.auth.user.token) {
      return redirect('/auth')
    }
}
