import React from 'react';
import { 
    Container, 
    Grid, 
    Typography, 
    IconButton, 
    Link 
} from '@mui/material';
import { 
    Facebook, 
    Instagram, 
    Twitter, 
    YouTube,
    Phone,
    Email,
    LocationOn 
} from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" className="footer-title">
                            Handloom Heritage
                        </Typography>
                        <Typography variant="body2" className="footer-description">
                            Preserving tradition, embracing innovation. Your destination for authentic handloom products.
                        </Typography>
                        <div className="footer-social">
                            <IconButton><Facebook /></IconButton>
                            <IconButton><Instagram /></IconButton>
                            <IconButton><Twitter /></IconButton>
                            <IconButton><YouTube /></IconButton>
                        </div>
                    </Grid>

                    {/* Quick Links */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" className="footer-title">
                            Quick Links
                        </Typography>
                        <ul className="footer-links">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/artisans">Our Artisans</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </Grid>

                    {/* Contact Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" className="footer-title">
                            Contact Us
                        </Typography>
                        <div className="footer-contact">
                            <div className="contact-item">
                                <Phone /> <span>+91 123 456 7890</span>
                            </div>
                            <div className="contact-item">
                                <Email /> <span>info@handloomheritage.com</span>
                            </div>
                            <div className="contact-item">
                                <LocationOn /> 
                                <span>123 Craft Street, Textile Hub,<br />Handloom City - 500001</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* Copyright */}
                <div className="footer-bottom">
                    <Typography variant="body2">
                        © 2024 Handloom Heritage. All rights reserved.
                    </Typography>
                    <div className="footer-bottom-links">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;