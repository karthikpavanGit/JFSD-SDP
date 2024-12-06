import React, { useState } from 'react';
import {
    IconButton,
    Badge,
    Menu,
    MenuItem,
    Typography,
    Box,
    Divider,
    Button
} from '@mui/material';
import {
    Notifications as NotificationsIcon,
    ShoppingBag,
    LocalOffer,
    Update
} from '@mui/icons-material';
import './Notifications.css';

const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            type: 'order',
            message: 'Your order #12345 has been shipped',
            time: '2 hours ago',
            read: false
        },
        {
            id: 2,
            type: 'offer',
            message: 'Special 20% off on all silk sarees!',
            time: '1 day ago',
            read: false
        },
        {
            id: 3,
            type: 'update',
            message: 'New collection of summer wear is here',
            time: '2 days ago',
            read: true
        }
    ]);

    const unreadCount = notifications.filter(n => !n.read).length;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMarkAsRead = (id) => {
        setNotifications(prev =>
            prev.map(notification =>
                notification.id === id
                    ? { ...notification, read: true }
                    : notification
            )
        );
    };

    const handleMarkAllRead = () => {
        setNotifications(prev =>
            prev.map(notification => ({ ...notification, read: true }))
        );
    };

    const getIcon = (type) => {
        switch (type) {
            case 'order':
                return <ShoppingBag />;
            case 'offer':
                return <LocalOffer />;
            case 'update':
                return <Update />;
            default:
                return <NotificationsIcon />;
        }
    };

    return (
        <div className="notifications">
            <IconButton onClick={handleClick} color="inherit">
                <Badge badgeContent={unreadCount} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="notifications-menu"
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <div className="notifications-header">
                    <Typography variant="h6">Notifications</Typography>
                    {unreadCount > 0 && (
                        <Button onClick={handleMarkAllRead}>
                            Mark all as read
                        </Button>
                    )}
                </div>
                <Divider />
                {notifications.length === 0 ? (
                    <MenuItem disabled>
                        <Typography>No notifications</Typography>
                    </MenuItem>
                ) : (
                    notifications.map(notification => (
                        <MenuItem
                            key={notification.id}
                            onClick={() => handleMarkAsRead(notification.id)}
                            className={`notification-item ${notification.read ? 'read' : ''}`}
                        >
                            <Box className="notification-icon">
                                {getIcon(notification.type)}
                            </Box>
                            <Box className="notification-content">
                                <Typography variant="body1">
                                    {notification.message}
                                </Typography>
                                <Typography variant="caption" color="textSecondary">
                                    {notification.time}
                                </Typography>
                            </Box>
                        </MenuItem>
                    ))
                )}
            </Menu>
        </div>
    );
};

export default Notifications;