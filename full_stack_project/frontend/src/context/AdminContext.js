import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext(null);

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        setLoading(true);
        try {
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                setAdmin(data.admin);
                localStorage.setItem('adminToken', data.token);
                return true;
            } else {
                setError(data.message);
                return false;
            }
        } catch (err) {
            setError('Server error');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setAdmin(null);
        localStorage.removeItem('adminToken');
    };

    return (
        <AdminContext.Provider value={{
            admin,
            loading,
            error,
            login,
            logout
        }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => useContext(AdminContext);