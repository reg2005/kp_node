import axios from '~plugins/axios'
import Vue from 'vue'

export const nuxtServerInit = ({commit, dispatch}, {req, route}) => {
    // Vue.i18n.set(route.params.lang)
    // // if (req.session && req.session.authUser) {
    // //     commit('SET_USER', req.session.authUser)
    // // }
    // return Promise.all([
    //     dispatch('getAllPublicState')
    // ])

}

export const getAllState = ({commit, state}) => {
    return new Promise((resolve, reject) => {
        axios.get('get.all.state').then((response) => {
            var data = response.data
            commit('setUser', data.user)
            resolve()
        }).catch((error) => {
            resolve()
            console.log(error)
        })
    })
}

// export const logout = (store) => {
//     store.commit('setToken', null)
//     store.commit('setUser', null)
// }
