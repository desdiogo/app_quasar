export default ({ router, store }) => {
  router.beforeEach((to, from, next) => {
    let token = -1
    if (localStorage.getItem('apiToken')) {
      store.dispatch('Login/getToken')
      token = Date.parse(store.state.Login.dataApi.expires) - Date.now()
    }
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'))
      store.commit('Login/setUser', user)
    }
    const auth = to.matched.some(record => record.meta.auth)
    if (auth && token < 0) next({ path: '/login' })
    else next()
  })

  router.beforeEach((to, from, next) => {
    let token = -1
    if (localStorage.getItem('apiToken')) {
      store.dispatch('Login/getToken')
      token = Date.parse(store.state.Login.dataApi.expires) - Date.now()
    }
    if (to.path === '/login' && token > 0) next({ path: '/' })
    else next()
  })
}
