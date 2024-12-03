import axiosInstance from "./axiosInstance";

const hrService = {
    register: async (payload) => {
        try {
            const response = await axiosInstance.post('/hr/register', payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchAll: async () => {
        try {
            const response = await axiosInstance.get('/hr/all');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    update: async () => {
        try {
            const response = await axiosInstance.get('/hr/update');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    fetchTotal: async () => {
        try {
            const response = await axiosInstance.get('/hr/total');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchById: async (id) => {
        try {
            const response = await axiosInstance.get('/hr/id/' + id);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    
};

export default hrService;
