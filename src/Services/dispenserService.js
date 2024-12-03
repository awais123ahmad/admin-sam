import axiosInstance from "./axiosInstance";

const dispenserService = {
    register: async (payload) => {
        try {
            const response = await axiosInstance.post('/dispenser/register', payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchAll: async () => {
        try {
            const response = await axiosInstance.get('/dispenser/all');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    update: async () => {
        try {
            const response = await axiosInstance.get('/dispenser/update');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    fetchTotal: async () => {
        try {
            const response = await axiosInstance.get('/dispenser/total');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchById: async (id) => {
        try {
            const response = await axiosInstance.get('/dispenser/id/' + id);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    
};

export default dispenserService;
