import React, { createContext, useContext, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const NotificationContext = createContext();

export const useNotification = () => {
    return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const showNotification = (message, type = 'info', duration = 5000) => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, message, type, duration }]);
    };

    const hideNotification = (id) => {
        setNotifications(prev => prev.filter(notification => notification.id !== id));
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            {notifications.map(notification => (
                <Snackbar
                    key={notification.id}
                    open={true}
                    autoHideDuration={notification.duration}
                    onClose={() => hideNotification(notification.id)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Alert
                        onClose={() => hideNotification(notification.id)}
                        severity={notification.type}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {notification.message}
                    </Alert>
                </Snackbar>
            ))}
        </NotificationContext.Provider>
    );
};