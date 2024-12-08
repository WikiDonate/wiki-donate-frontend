import api from '../config/apiConfig'

const searchArticles = (query) => {
    return api.get('/search?query=' + query)
}

const saveArticle = (params) => {
    return api.post('/articles/article', params)
}

const getArticle = (slug) => {
    return api.get(`/articles/article/${slug}`)
}

const getSection = (uuid) => {
    return api.get(`/articles/section/${uuid}`)
}

const updateSection = (params) => {
    return api.put(`/articles/section/${params.uuid}`, params)
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

export const articleService = {
    searchArticles,
    saveArticle,
    getArticle,
    getSection,
    updateSection,
}
