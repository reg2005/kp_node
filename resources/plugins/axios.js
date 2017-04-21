import Vue from 'vue'
import Axios from 'axios'
import VueAxios from 'vue-axios'

const axios = Axios.create({
    baseURL: '/api/v1'
})

// axios.defaults.headers.common['Authorization'] = 'Bearer: ' + store.state.token;
Vue.use(VueAxios, axios)

export default axios