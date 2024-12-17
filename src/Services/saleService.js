import axiosInstance from "./axiosInstance";

const saleService = {
    create: async (payload) => {
        try {
            const response = await axiosInstance.post('/sales/create', payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    save: async (payload) => {
        try {
            const response = await axiosInstance.post('/sales/save', payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    monthSales: async (payload) => {
        try {
            const response = await axiosInstance.get('/sales/monthsales', payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    fetchAllPatients: async () => {
        try {
            const response = await axiosInstance.get('/sales/all');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
    fetchTotal: async () => {
        try {
            const response = await axiosInstance.get('/sales/total');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
      updatePatient: async (id, payload) => {
        try {
            const response = await axiosInstance.put(`/sales/edit/${id}`, payload);
            return response.data;
        } catch (error) {
            throw error.response.data;
        } 
    },
    fetchInvoiceSales: async () => {
        try {
            const response = await axiosInstance.get('/sales/invoicesales');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    fetchTodayProfit: async () => {
        try {
            const response = await axiosInstance.get('/sales/todayprofit');
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },
 };

export default saleService;
