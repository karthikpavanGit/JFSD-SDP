import React, { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Grid
} from '@mui/material';

const TicketSystem = () => {
    const [ticket, setTicket] = useState({
        subject: '',
        category: '',
        description: '',
        orderNumber: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle ticket submission
        console.log('Ticket submitted:', ticket);
    };

    return (
        <Paper className="ticket-system">
            <Typography variant="h6" gutterBottom>
                Submit a Support Ticket
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Subject"
                            value={ticket.subject}
                            onChange={(e) => setTicket({...ticket, subject: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth required>
                            <InputLabel>Category</InputLabel>
                            <Select
                                value={ticket.category}
                                onChange={(e) => setTicket({...ticket, category: e.target.value})}
                            >
                                <MenuItem value="order">Order Issue</MenuItem>
                                <MenuItem value="product">Product Inquiry</MenuItem>
                                <MenuItem value="technical">Technical Support</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Description"
                            value={ticket.description}
                            onChange={(e) => setTicket({...ticket, description: e.target.value})}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Submit Ticket
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
};

export default TicketSystem;