export function setLogin (state, payload) {
  state.login.email = payload.email
  state.login.password = payload.password
}

export function setToken (state, payload) {
  state.token = payload.token
}

export function setDataApi (state, payload) {
  state.dataApi.token = payload.token
  state.dataApi.expires = payload.expires_at
}

export function setNameRoute (state, payload) {
  state.nameRoute = payload
}

export function setUser (state, payload) {
  state.user = payload
}
