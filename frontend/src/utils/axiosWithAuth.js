import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://anywhere-fitness-4.herokuapp.com/',
    })
};

// 'http://localhost:5000/api/'