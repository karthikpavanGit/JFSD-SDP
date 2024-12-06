import React, { useState } from 'react';
import {
    Container,
    Paper,
    Typography,
    Tabs,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Chip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField
} from '@mui/material';
import {
    Search,
    FilterList,
    GetApp,
    Visibility,
    Close
} from '@mui/icons-material';
import './OrderManagement.css';

const OrderManagement = () => {
    const [tab, setTab] = useState(0);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [openDetails, setOpenDetails] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterAnchor, setFilterAnchor] = useState(null);

    // Sample orders data
    const orders = [
        {
            id: 'ORD123456',
            date: '2024-03-15',
            total: 24999,
            status: 'Processing',
            items: [
                {
                    id: 1,
                    name: 'Silk Saree',
                    quantity: 1,
                    price: 24999,
                    image: '/images/products/saree1.jpg'
                }
            ],
            shipping: {
                address: '123 Main St, Mumbai, Maharashtra',
                method: 'Express Delivery',
                tracking: 'TRK987654321'
            },
            payment: {
                method: 'Credit Card',
                status: 'Paid'
            }
        },
        // Add more orders...
    ];

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setOpenDetails(true);
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'processing':
                return 'warning';
            case 'shipped':
                return 'info';
            case 'delivered':
                return 'success';
            case 'cancelled':
                return 'error';
            default:
                return 'default';
        }
    };

    const filteredOrders = orders.filter(order => 
        order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="order-management">
            <Container maxWidth="lg">
                <Paper className="orders-paper">
                    <div className="orders-header">
                        <Typography variant="h5">Order Management</Typography>
                        <div className="header-actions">
                            <TextField
                                placeholder="Search orders..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                InputProps={{
                                    startAdornment: <Search />,
                                }}
                                size="small"
                            />
                            <IconButton onClick={(e) => setFilterAnchor(e.currentTarget)}>
                                <FilterList />
                            </IconButton>
                        </div>
                    </div>

                    <Tabs
                        value={tab}
                        onChange={handleTabChange}
                        className="order-tabs"
                    >
                        <Tab label="All Orders" />
                        <Tab label="Processing" />
                        <Tab label="Shipped" />
                        <Tab label="Delivered" />
                        <Tab label="Cancelled" />
                    </Tabs>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order ID</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Total</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredOrders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>₹{order.total.toLocaleString()}</TableCell>
                                        <TableCell>
                                            <Chip
                                                label={order.status}
                                                color={getStatusColor(order.status)}
                                                size="small"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <IconButton
                                                onClick={() => handleViewDetails(order)}
                                                size="small"
                                            >
                                                <Visibility />
                                            </IconButton>
                                            <IconButton size="small">
                                                <GetApp />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

                {/* Order Details Dialog */}
                <Dialog
                    open={openDetails}
                    onClose={() => setOpenDetails(false)}
                    maxWidth="md"
                    fullWidth
                >
                    <DialogTitle>
                        <div className="dialog-title">
                            <Typography variant="h6">
                                Order Details - {selectedOrder?.id}
                            </Typography>
                            <IconButton onClick={() => setOpenDetails(false)}>
                                <Close />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        {selectedOrder && (
                            <div className="order-details">
                                <div className="detail-section">
                                    <Typography variant="subtitle1">Items</Typography>
                                    {selectedOrder.items.map((item) => (
                                        <div key={item.id} className="order-item">
                                            <img src={item.image} alt={item.name} />
                                            <div className="item-info">
                                                <Typography variant="body1">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary">
                                                    Quantity: {item.quantity}
                                                </Typography>
                                                <Typography variant="body2">
                                                    ₹{item.price.toLocaleString()}
                                                </Typography>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="detail-section">
                                    <Typography variant="subtitle1">Shipping</Typography>
                                    <Typography variant="body2">
                                        {selectedOrder.shipping.address}
                                    </Typography>
                                    <Typography variant="body2">
                                        Method: {selectedOrder.shipping.method}
                                    </Typography>
                                    <Typography variant="body2">
                                        Tracking: {selectedOrder.shipping.tracking}
                                    </Typography>
                                </div>

                                <div className="detail-section">
                                    <Typography variant="subtitle1">Payment</Typography>
                                    <Typography variant="body2">
                                        Method: {selectedOrder.payment.method}
                                    </Typography>
                                    <Typography variant="body2">
                                        Status: {selectedOrder.payment.status}
                                    </Typography>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDetails(false)}>
                            Close
                        </Button>
                        <Button variant="contained">
                            Download Invoice
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </div>
    );
};

export default OrderManagement;