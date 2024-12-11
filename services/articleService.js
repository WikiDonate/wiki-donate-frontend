import api from '../config/apiConfig'

const searchArticles = (query) => {
    return api.get('/search?query=' + query)
}

const saveArticle = (params) => {
    return api.post('/articles', params)
}

const getArticle = (slug) => {
    return api.get(`/articles/${slug}`)
}

const getSection = (uuid) => {
    return api.get(`/articles/section/${uuid}`)
}

const updateSection = (params) => {
    return api.put(`/articles/section/${params.uuid}`, params)
}

const getHistory = (slug) => {
    return api.get(`/articles/history/${slug}`)
}

export const articleService = {
    searchArticles,
    saveArticle,
    getArticle,
    getSection,
    updateSection,
    getHistory,
}
