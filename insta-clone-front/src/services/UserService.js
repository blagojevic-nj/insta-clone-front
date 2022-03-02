import axios from "axios"

export const resetPassword = (email) => {
    return axios.post(process.env.REACT_APP_SERVER_URL + "/api/user/reset-password?email="+email);
}

export const changePasswordWithToken = (token, data) => {
    return axios.post(process.env.REACT_APP_SERVER_URL + "/api/user/change-password-token?token="+token, data);
}