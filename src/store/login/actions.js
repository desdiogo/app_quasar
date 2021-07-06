import { api } from 'src/boot/axios'
import { notify } from 'src/services/Notify'
import { addHours } from 'date-fns'
import { loading } from 'src/services/Loading'

export function login ({ commit, dispatch }, payload) {
  commit('setLogin', payload)
  loading.show()
  api.post('auth/login', payload)
    .then(res => {
      const dataToken = {
        id: 1,
        token: res.data.access_token,
        created_at: new Date().toString(),
        expires_at: addHours(new Date(), (res.data.expires_in / 3600)).toString()
      }
      localStorage.setItem('apiToken', JSON.stringify(dataToken))
      commit('setNameRoute', 'home')
    })
    .then(() => {
      dispatch('me')
      loading.hide()
      this.$router.push({ name: 'home' })
    })
    .catch(() => {
      loading.hide()
      notify('O e-mail e/ou senha foram digitados incorretamente, verifique e tente novamente')
    })
}

export function getToken ({ commit }) {
  const apiToken = JSON.parse(localStorage.getItem('apiToken'))
  commit('setDataApi', apiToken)
}

export function me ({ commit, dispatch, state }) {
  dispatch('getToken')
  const data = {}
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.dataApi.token
    }
  }
  api.post('/auth/me', data, config)
    .then(res => {
      const user = res.data.name.split(' ')
      localStorage.setItem('user', JSON.stringify(user[0]))
    })
}

export function logout ({ dispatch, state }) {
  dispatch('getToken')
  const data = {}
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.dataApi.token
    }
  }
  api.post('/auth/logout', data, config)
    .then(res => {
      localStorage.removeItem('apiToken')
    })
    .then(() => {
      this.$router.push({ name: 'login' })
      localStorage.removeItem('user')
    })
}
