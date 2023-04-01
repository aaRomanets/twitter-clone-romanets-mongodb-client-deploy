import axios from 'axios';

axios.interceptors.request.use((config) => {
    config.headers['token'] = window.localStorage.getItem('token');
    
    console.log("config.headers['token']");
    console.log(config.headers['token']);
   
    return config;
});

export {axios};