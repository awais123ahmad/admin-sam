import axiosInstance from "./axiosInstance";

const adminService = {
    register: async (payload) => {
        try {
            const response = await axiosInstance.post('/admin/register', payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchAll: async () => {
        try {
            const response = await axiosInstance.get('/admin/all');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    update: async () => {
        try {
            const response = await axiosInstance.get('/admin/update');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    fetchTotal: async () => {
        try {
            const response = await axiosInstance.get('/admin/total');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchById: async (id) => {
        try {
            const response = await axiosInstance.get('/admin/id/' + id);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    
};

export default adminService;
