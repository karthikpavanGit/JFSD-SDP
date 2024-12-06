import React, { useState } from 'react';
import {
    Box,
    IconButton,
    Dialog,
    DialogContent,
    Zoom,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {
    ArrowBack,
    ArrowForward,
    ZoomIn,
    Close
} from '@mui/icons-material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './ProductGallery.css';

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [openZoom, setOpenZoom] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handlePrevious = () => {
        setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleThumbnailClick = (index) => {
        setSelectedImage(index);
    };

    return (
        <div className="product-gallery">
            <div className="main-image-container">
                <img
                    src={images[selectedImage].large}
                    alt={`Product view ${selectedImage + 1}`}
                    className="main-image"
                />
                <div className="gallery-controls">
                    <IconButton onClick={handlePrevious} className="gallery-control-button">
                        <ArrowBack />
                    </IconButton>
                    <IconButton onClick={() => setOpenZoom(true)} className="gallery-control-button">
                        <ZoomIn />
                    </IconButton>
                    <IconButton onClick={handleNext} className="gallery-control-button">
                        <ArrowForward />
                    </IconButton>
                </div>
            </div>

            <div className="thumbnails-container">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <img
                            src={image.thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            <Dialog
                fullScreen={fullScreen}
                maxWidth="xl"
                open={openZoom}
                onClose={() => setOpenZoom(false)}
                TransitionComponent={Zoom}
            >
                <IconButton
                    onClick={() => setOpenZoom(false)}
                    className="zoom-close-button"
                >
                    <Close />
                </IconButton>
                <DialogContent>
                    <TransformWrapper
                        initialScale={1}
                        initialPositionX={0}
                        initialPositionY={0}
                    >
                        {({ zoomIn, zoomOut, resetTransform }) => (
                            <React.Fragment>
                                <div className="zoom-controls">
                                    <IconButton onClick={() => zoomIn()}>
                                        <ZoomIn />
                                    </IconButton>
                                    <IconButton onClick={() => zoomOut()}>
                                        <Close />
                                    </IconButton>
                                </div>
                                <TransformComponent>
                                    <img
                                        src={images[selectedImage].large}
                                        alt={`Product zoom view ${selectedImage + 1}`}
                                        className="zoom-image"
                                    />
                                </TransformComponent>
                            </React.Fragment>
                        )}
                    </TransformWrapper>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ProductGallery;