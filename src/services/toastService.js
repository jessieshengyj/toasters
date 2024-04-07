import axios from 'axios';

export const getToasts = async () => {
    const toasts = await axios.get('http://localhost:3001/toast');
    return toasts.data;
};
