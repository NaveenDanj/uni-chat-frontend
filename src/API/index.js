import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-c0b0b.firebaseio.com/',
});

export default instance;