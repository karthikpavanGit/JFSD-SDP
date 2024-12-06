import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import wishlistReducer from './wishlistSlice';
import authReducer from './authSlice';
import orderReducer from './orderSlice';
import productReducer from './productSlice';
import searchReducer from './searchSlice';
import userReducer from './userSlice';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext'

// Import middleware
import { cartMiddleware } from './middleware/cartMiddleware';
import { wishlistMiddleware } from './middleware/wishlistMiddleware';
import { authMiddleware } from './middleware/authMiddleware';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer,
        orders: orderReducer,
        products: productReducer,
        search: searchReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['auth/setUser', 'products/setImages'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload.timestamp', 'payload.image'],
                // Ignore these paths in the state
                ignoredPaths: ['products.images', 'auth.user.timestamp'],
            },
        }).concat([
            cartMiddleware,
            wishlistMiddleware,
            authMiddleware,
        ]),
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create hooks for typing
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Persist cart and wishlist state in localStorage
store.subscribe(() => {
    const state = store.getState();
    try {
        // Save cart state
        localStorage.setItem('cart', JSON.stringify(state.cart));
        // Save wishlist state
        localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
        // Save auth token
        if (state.auth.token) {
            localStorage.setItem('token', state.auth.token);
        } else {
            localStorage.removeItem('token');
        }
    } catch (error) {
        console.error('Error saving state to localStorage:', error);
    }
});

// Initialize store with persisted data
const initializeStore = () => {
    try {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            store.dispatch({ type: 'cart/initialize', payload: JSON.parse(savedCart) });
        }

        // Load wishlist from localStorage
        const savedWishlist = localStorage.getItem('wishlist');
        if (savedWishlist) {
            store.dispatch({ type: 'wishlist/initialize', payload: JSON.parse(savedWishlist) });
        }

        // Load auth token from localStorage
        const token = localStorage.getItem('token');
        if (token) {
            store.dispatch({ type: 'auth/setToken', payload: token });
            // You might want to validate the token here
        }
    } catch (error) {
        console.error('Error loading persisted state:', error);
    }
};

// Initialize the store
initializeStore();

export default store;