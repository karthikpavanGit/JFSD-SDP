import React, { useState, useRef, useEffect } from 'react';
import {
    Dialog,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    TextField,
    Box,
    Avatar,
    Paper
} from '@mui/material';
import { Close, Send, AttachFile } from '@mui/icons-material';

const ChatWindow = ({ open, onClose }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! How can I help you today?", sender: 'agent', timestamp: new Date() }
    ]);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (message.trim()) {
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: message,
                sender: 'user',
                timestamp: new Date()
            }]);
            setMessage('');
            // Simulate agent response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    id: Date.now(),
                    text: "Thanks for your message. Let me help you with that.",
                    sender: 'agent',
                    timestamp: new Date()
                }]);
            }, 1000);
        }
    };

    return (
        <Dialog
            fullWidth
            maxWidth="sm"
            open={open}
            onClose={onClose}
            className="chat-dialog"
        >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="chat-title">
                        Customer Support
                    </Typography>
                    <IconButton color="inherit" onClick={onClose}>
                        <Close />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
            <Box className="chat-messages">
                {messages.map(msg => (
                    <Box
                        key={msg.id}
                        className={`message ${msg.sender}`}
                    >
                        {msg.sender === 'agent' && (
                            <Avatar className="agent-avatar">CS</Avatar>
                        )}
                        <Paper className="message-content">
                            <Typography>{msg.text}</Typography>
                            <Typography variant="caption" className="timestamp">
                                {msg.timestamp.toLocaleTimeString()}
                            </Typography>
                        </Paper>
                    </Box>
                ))}
                <div ref={messagesEndRef} />
            </Box>

            <Box className="chat-input">
                <IconButton>
                    <AttachFile />
                </IconButton>
                <TextField
                    fullWidth
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <IconButton onClick={handleSend} color="primary">
                    <Send />
                </IconButton>
            </Box>
        </Dialog>
    );
};

export default ChatWindow;