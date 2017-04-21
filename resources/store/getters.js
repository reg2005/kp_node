import _ from 'lodash'
export const getTopics = state => state.topics
export const getCount = state => state.count
export const vgIsAdmin = state => _.get(state.user, 'is_superuser')
export const isBrowser = state => {
    return typeof document !== 'undefined'
}