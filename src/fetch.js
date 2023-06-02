import axios from "axios";

const API_BASE_URL = 'http://localhost:8000/api/v1';

export const authenticate = (code) => {
    return axios.get(`${API_BASE_URL}/auth/kakao/callback?code=${code}`);
};

export const loginPage = () => {
    return axios.get(`${API_BASE_URL}/auth/kakao/loginPage`)
}

export const register = (body) => {
    return axios.post(`${API_BASE_URL}/auth/register`, body)
}

export const tokenValid = (token) => {
    return axios.get(`${API_BASE_URL}/auth/valid`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};
