import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://react-my-project-23ac1.firebaseio.com/'
});

export default instance;