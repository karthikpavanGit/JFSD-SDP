import { createSlice } from '@reduxjs/toolkit';
import { clearCart } from './cartSlice';

export const syncCartOnAuth = () => async (dispatch, getState) => {
    const state = getState();
    const savedCartUser = localStorage.getItem('cartUser');
    const currentUser = state.auth?.user?.id;

    if (savedCartUser !== currentUser) {
        // Clear local cart if user changed
        dispatch(clearCart());
        
        if (currentUser) {
            try {
                // Fetch user's cart from backend
                const response = await fetch(`/api/cart/${currentUser}`);
                const userCart = await response.json();
                
                // Update cart with user's saved items
                userCart.items.forEach(item => {
                    dispatch(addToCart(item));
                });
            } catch (error) {
                console.error('Error syncing cart:', error);
            }
        }
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;