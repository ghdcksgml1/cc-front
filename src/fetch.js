import axios from "axios";

const API_BASE_URL = 'http://10.0.20.205/api/v1';
const BOARD_BASE_URL = 'http://10.0.20.205/api/board';
const HOSPITAL_BASE_URL = 'http://10.0.20.205/api/company'

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

// HOSPITAL
export const companyList = (page) => {
    return axios.get(`${HOSPITAL_BASE_URL}/company/list?page=${page}`)
}

export const companyReviewCreate = (body) => {
    return axios.post(`${HOSPITAL_BASE_URL}/review/new`, body)
}

export const companyReviewList = (companyId) => {
    return axios.get(`${HOSPITAL_BASE_URL}/review/${companyId}`)
}

export const companyFindName = (companyName) => {
    return axios.get(`${HOSPITAL_BASE_URL}/company/find/${companyName}`)
}
