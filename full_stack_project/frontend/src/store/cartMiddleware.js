import { addToCart, removeFromCart, updateQuantity, clearCart } from './cartSlice';

export const cartMiddleware = store => next => action => {
    const result = next(action);
    
    if (
        action.type === addToCart.type ||
        action.type === removeFromCart.type ||
        action.type === updateQuantity.type ||
        action.type === clearCart.type
    ) {
        const state = store.getState();
        try {
            localStorage.setItem('cartTimestamp', Date.now().toString());
            localStorage.setItem('cartUser', state.auth?.user?.id || 'guest');
        } catch (error) {
            console.error('Error updating cart metadata:', error);
        }
    }
    
    return result;
};