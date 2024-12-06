import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Paper
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const FAQSection = () => {
    const faqs = [
        {
            question: "How do I track my order?",
            answer: "You can track your order by logging into your account and visiting the 'Orders' section. Click on the specific order to view its current status and tracking information."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Initiate a return from your account's 'Orders' section."
        },
        // Add more FAQs...
    ];

    return (
        <Paper className="faq-section">
            <Typography variant="h6" gutterBottom>
                Frequently Asked Questions
            </Typography>
            {faqs.map((faq, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                        <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Paper>
    );
};

export default FAQSection;