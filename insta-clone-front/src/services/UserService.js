import axios from "axios"

const url = process.env.REACT_APP_SERVER_URL + "/api/user"

export const resetPassword = (email) => {
    return axios.post(process.env.REACT_APP_SERVER_URL + "/api/user/reset-password?email="+email);
}

export const changePasswordWithToken = (token, data) => {
    return axios.post(process.env.REACT_APP_SERVER_URL + "/api/user/change-password-token?token="+token, data);
}

export const searchUsers = (query) => {
    return axios.get(process.env.REACT_APP_SERVER_URL + "/api/user?query="+query);

}


export const getProfileInfo = (username) => {
    return axios.get(url + `/profile-info?username=${username}`)
}

export const checkIfUserFollowsUser = (username, followedUser) => {
    return axios.get(url + `/follow-check?username=${username}&followedUsername=${followedUser}`)
}
