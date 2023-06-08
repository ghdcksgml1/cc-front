import axios from "axios";

const API_BASE_URL = 'http://localhost:8000/api/v1';
const BOARD_BASE_URL = 'http://localhost:8001/api/v1';

// API
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

// BOARD
export const boardSelect = (page, searchKeyword) => {
    return axios.get(`${BOARD_BASE_URL}/board/list?page=${page}&size=10&searchKeyword=${searchKeyword}`)
}

export const boardCreate = (body) => {
    return axios.post(`${BOARD_BASE_URL}/board/write`, body)
}
