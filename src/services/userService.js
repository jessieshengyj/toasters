import axios from 'axios';

export const validateUser = async (username, password) => {
    try {
        const res = await axios.post('http://localhost:3001/auth', { username, password });
        const jwt = res.data.token;
        localStorage.setItem('jwt', jwt);
    } catch (e) {
        // throw new Error(e);
    }
}

export const createNewUser = async (data) => {
    try {
        const res = await axios.post('http://localhost:3001/user', data);
        const jwt = res.data.token;
        localStorage.setItem('jwt', jwt);
    } catch (e) {

    }
};
