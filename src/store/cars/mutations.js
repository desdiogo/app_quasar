export function setCars (state, payload) {
  state.data = payload.data
}

export function setCarId (state, payload) {
  state.car.id = payload.row.id
}

export function findById (state, payload) {
  state.car.id = payload.row.id
}

export function setBrand (state, payload) {
  state.brand = payload.data
}

export function setToken (state, payload) {
  state.token = payload.token
}

export function setTableVisible (state) {
  state.visibleTable = true
  state.visible = false
}

export function setTableInvisible (state) {
  state.visibleTable = false
  state.visible = true
}

export function setDialog (state, payload) {
  state.dialog = payload
}

export function setConfirmDelete (state, payload) {
  state.confirmDelete = payload
}
