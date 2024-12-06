import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
    try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error('Error loading cart from storage:', error);
        return [];
    }
};

const saveCartToStorage = (cart) => {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to storage:', error);
    }
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: loadCartFromStorage(),
        total: 0,
        itemCount: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, name, price, image, quantity = 1 } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ id, name, price, image, quantity });
            }

            state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            saveCartToStorage(state.items);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
            state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            
            saveCartToStorage(state.items);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            
            if (item) {
                item.quantity = Math.max(1, quantity);
                state.itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
                state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                
                saveCartToStorage(state.items);
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.itemCount = 0;
            state.total = 0;
            
            localStorage.removeItem('cart');
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;