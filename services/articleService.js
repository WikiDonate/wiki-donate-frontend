import api from '../config/apiConfig'

const saveArticle = (params) => {
    return api.post('/articles', params)
}

// const forgotPassword = (params) => {
//     return api.post('/forgotPassword', params)
// }

// const changePassword = (params) => {
//     return api.post('/changePassword', params)
// }

// const updateNotifications = (params) => {
//     return api.post('/user/notifications', params)
// }

// const getNotifications = () => {
//     return api.get('/user/notifications')
// }

export const articleService = {
    saveArticle,
}
