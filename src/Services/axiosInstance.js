import axios from 'axios';

const axiosInstance = axios.create({
<<<<<<< HEAD
    //baseURL: 'https://dbsspareparts.com/api',
     baseURL: 'http://localhost/api',
=======
      baseURL: 'http://119.73.122.118/api',
     //baseURL: 'http://localhost:5005/api',
>>>>>>> eed8e6875d22a3418c4c50ece39184c3df46e630

    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
      
        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
        
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
