const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Email transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

const authController = {
    // Register new user
    register: async (req, res) => {
        try {
            const { firstName, lastName, email, password } = req.body;

            // Check if user already exists
            const [existingUsers] = await db.query(
                'SELECT * FROM users WHERE email = ?',
                [email]
            );

            if (existingUsers.length > 0) {
                return res.status(400).json({ message: 'Email already registered' });
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create verification token
            const verificationToken = jwt.sign(
                { email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Insert user into database
            const [result] = await db.query(
                'INSERT INTO users (first_name, last_name, email, password, verification_token) VALUES (?, ?, ?, ?, ?)',
                [firstName, lastName, email, hashedPassword, verificationToken]
            );

            // Send verification email
           // In your register function, update the email sending part
const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${verificationToken}`;
await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your Nakshatra Threads account',
    html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
            <h1 style="color: #1a237e; text-align: center;">Welcome to Nakshatra Threads!</h1>
            <p>Hello ${firstName},</p>
            <p>Thank you for registering with Nakshatra Threads. Please verify your email address by clicking the button below:</p>
            <div style="text-align: center; margin: 30px 0;">
                <a href="${verificationLink}" 
                   style="background-color: #1a237e; 
                          color: white; 
                          padding: 12px 30px; 
                          text-decoration: none; 
                          border-radius: 5px; 
                          display: inline-block;">
                    Verify Email
                </a>
            </div>
            <p>Or copy and paste this link in your browser:</p>
            <p style="word-break: break-all; color: #1a237e;">${verificationLink}</p>
            <p>This link will expire in 24 hours.</p>
            <p>If you didn't create this account, please ignore this email.</p>
            <hr style="margin: 20px 0; border: 1px solid #eee;">
            <p style="color: #666; font-size: 12px; text-align: center;">
                This is an automated email, please do not reply.
            </p>
        </div>
    `
});

            res.status(201).json({
                message: 'Registration successful. Please check your email to verify your account.'
            });

        } catch (error) {
            console.error('Registration error:', error);
            res.status(500).json({ message: 'Server error during registration' });
        }
    },

    // Verify email
  // Update the verifyEmail function
verifyEmail: async (req, res) => {
    try {
        const { token } = req.params;

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Update user verification status
        const [result] = await db.query(
            'UPDATE users SET is_verified = true, verification_token = NULL WHERE email = ? AND verification_token = ?',
            [decoded.email, token]
        );

        if (result.affectedRows === 0) {
            return res.status(400).json({ 
                message: 'Invalid or expired verification token. Please request a new verification email.' 
            });
        }

        res.json({ 
            message: 'Email verified successfully! You can now login to your account.' 
        });

    } catch (error) {
        console.error('Verification error:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ 
                message: 'Verification link has expired. Please request a new one.' 
            });
        }
        res.status(400).json({ 
            message: 'Invalid verification link. Please try again or contact support.' 
        });
    }
},

    // Login user
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Get user from database
            const [users] = await db.query(
                'SELECT * FROM users WHERE email = ?',
                [email]
            );

            if (users.length === 0) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            const user = users[0];

            // Check if email is verified
            if (!user.is_verified) {
                return res.status(401).json({ message: 'Please verify your email first' });
            }

            // Check password
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.json({
                token,
                user: {
                    id: user.id,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    email: user.email
                }
            });

        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ message: 'Server error during login' });
        }
    },



    getUserProfile: async (req, res) => {
        try {
            const [users] = await db.query(
                `SELECT 
                    id, first_name, last_name, email, 
                    COALESCE(phone, '') as phone,
                    COALESCE(gender, '') as gender,
                    COALESCE(date_of_birth, '') as date_of_birth,
                    COALESCE(street, '') as street,
                    COALESCE(city, '') as city,
                    COALESCE(state, '') as state,
                    COALESCE(pincode, '') as pincode
                FROM users 
                WHERE id = ?`,
                [req.user.userId]
            );

            if (users.length === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            const user = users[0];
            res.json({
                id: user.id,
                firstName: user.first_name,
                lastName: user.last_name,
                email: user.email,
                phone: user.phone,
                gender: user.gender,
                dateOfBirth: user.date_of_birth,
                street: user.street,
                city: user.city,
                state: user.state,
                pincode: user.pincode
            });

        } catch (error) {
            console.error('Profile fetch error:', error);
            res.status(500).json({ message: 'Server error while fetching profile' });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            // Check if requesting user is admin
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied' });
            }
    
            const [users] = await db.query(
                `SELECT 
                    id, first_name, last_name, email, 
                    COALESCE(phone, '') as phone,
                    COALESCE(gender, '') as gender,
                    created_at, is_verified
                FROM users 
                WHERE role != 'admin'`
            );
    
            res.json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ message: 'Server error while fetching users' });
        }
    },
    
    deleteUser: async (req, res) => {
        try {
            // Check if requesting user is admin
            if (req.user.role !== 'admin') {
                return res.status(403).json({ message: 'Access denied' });
            }
    
            const userId = req.params.id;
            const [result] = await db.query(
                'DELETE FROM users WHERE id = ? AND role != "admin"',
                [userId]
            );
    
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'User not found or cannot be deleted' });
            }
    
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({ message: 'Server error while deleting user' });
        }
    }
};

module.exports = authController;