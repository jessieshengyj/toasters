import axios from 'axios';

export const getToasts = async () => {
    const toasts = await axios.get('http://localhost:3001/toast');
    return toasts.data;
};

export const createToast = async (toastData) => {
    try {
        const response = await axios.post('http://localhost:3001/toast', toastData);
        return response.data;
    } catch (error) {
        console.error('Error creating toast:', error);
        throw error;
    }
};

export const likeToast = async (id, like, userId) => {
    await axios.patch(`http://localhost:3001/toast/${id}`, { userId, like });
};
