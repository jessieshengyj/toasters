import axios from 'axios';
const token = localStorage.getItem('jwt');

export const getToasts = async () => {
    const toasts = await axios.get('https://toasters-service.onrender.com/toast', { headers: { Authorization: `Bearer ${token}` } });
    return toasts.data;
};

export const createToast = async (toastData) => {
    try {
        const response = await axios.post('https://toasters-service.onrender.com/toast', toastData, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.error('Error creating toast:', error);
        throw error;
    }
};

export const likeToast = async (id, like, userId) => {
    await axios.patch(`https://toasters-service.onrender.com/toast/${id}`, { userId, like }, { headers: { Authorization: `Bearer ${token}` } });
};
