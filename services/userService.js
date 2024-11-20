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

export const userService = {
    register,
    forgotPassword,
    changePassword,
}
