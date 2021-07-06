import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({ baseURL: 'https://app.desdiogo.com/api' })
Vue.prototype.$api = api

export { axios, api }
