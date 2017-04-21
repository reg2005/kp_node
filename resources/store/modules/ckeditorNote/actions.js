import axios from '~plugins/axios'

export const showPoupUp = ({commit, state}, payload) => {
    commit('setShow', payload)
}
export const placePoupUp = ({commit, state}, payload) => {
    $(payload).html('sdfdsfsdf')
}

// export const logout = (store) => {
//     store.commit('setToken', null)
//     store.commit('setUser', null)
// }
