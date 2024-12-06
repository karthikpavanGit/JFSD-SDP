const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const api = {
    // Categories
    getCategories: async () => {
        const response = await fetch(`${BASE_URL}/categories`);
        return response.json();
    },

    addCategory: async (categoryData) => {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${BASE_URL}/admin/categories`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(categoryData),
        });
        return response.json();
    },

    // Products
    getProducts: async () => {
        const response = await fetch(`${BASE_URL}/products`);
        return response.json();
    },

    addProduct: async (productData) => {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${BASE_URL}/admin/products`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productData),
        });
        return response.json();
    },

    // Orders
    getOrders: async () => {
        const token = localStorage.getItem('adminToken');
        const response = await fetch(`${BASE_URL}/admin/orders`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        return response.json();
    },
};