import { api } from 'boot/axios'
import { loading } from 'src/services/Loading'
import { notify } from 'src/services/Notify'

export function setCars ({ commit, dispatch, state }) {
  commit('setTableInvisible')
  dispatch('getToken')
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }
  api('/carros', config)
    .then(res => {
      commit('setCars', res)
      commit('setTableVisible')
    })
}

export function deleteCar ({ commit, dispatch, state }) {
  commit('setConfirmDelete', false)
  dispatch('getToken')
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }
  loading.show()
  api.delete(`/carros/${state.car.id}`, config)
    .then(res => {
      loading.hide()
      notify(res.data.msg)
      dispatch('setCars')
    })
}

export function editCar ({ commit, dispatch, state }, payload) {
  dispatch('getToken')
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }
  loading.show()
  api.put(`/carros/${state.car.id}`, payload, config)
    .then(res => {
      commit('setDialog', false)
      loading.hide()
      dispatch('setCars')
      notify(res.data.msg)
    })
}

export function newCar ({ commit, dispatch, state }, payload) {
  loading.show()
  dispatch('getToken')
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }
  api.post('carros', payload, config)
    .then(res => {
      notify(res.data.msg)
      loading.hide()
      commit('setDialog', false)
      dispatch('setCars')
    })
}

export function getBrand ({ commit, dispatch, state }) {
  dispatch('getToken')
  const config = {
    headers: {
      Authorization: 'Bearer ' + state.token
    }
  }
  api('/marcas', config)
    .then(res => {
      commit('setBrand', res)
    })
}

export function getToken ({ commit }) {
  const token = JSON.parse(localStorage.getItem('apiToken'))
  commit('setToken', token)
}
