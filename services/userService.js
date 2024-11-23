import api from '../config/apiConfig'

const register = (params) => {
    return api.post('/register', params)
}

const forgotPassword = (params) => {
    return api.post('/forgotPassword', params)
}

const changePassword = (params) => {
    return api.post('/changePassword', params)
}

const updateNotifications = (params) => {
    return api.post('/user/notifications', params)
}

const getNotifications = () => {
    return api.get('/user/notifications')
}

export const userService = {
    register,
    forgotPassword,
    changePassword,
    updateNotifications,
    getNotifications,
}
