import api from '../config/apiConfig'

const register = (params) => {
    return api.post('/register', params)
}

export const userService = {
    register,
}
