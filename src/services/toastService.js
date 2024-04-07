import axios from 'axios';
const token = localStorage.getItem('jwt');

export const getToasts = async () => {
    const toasts = await axios.get('http://localhost:3001/toast', { headers: { Authorization: `Bearer ${token}` } });
    return toasts.data;
};

export const createToast = async (toastData) => {
    try {
        const response = await axios.post('http://localhost:3001/toast', toastData, { headers: { Authorization: `Bearer ${token}` } });
        return response.data;
    } catch (error) {
        console.error('Error creating toast:', error);
        throw error;
    }
};

export const likeToast = async (id, like, userId) => {
    await axios.patch(`http://localhost:3001/toast/${id}`, { userId, like }, { headers: { Authorization: `Bearer ${token}` } });
};
