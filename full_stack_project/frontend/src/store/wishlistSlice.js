import { createSlice } from '@reduxjs/toolkit';

const loadWishlistFromStorage = () => {
    try {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    } catch (error) {
        console.error('Error loading wishlist from storage:', error);
        return [];
    }
};

const saveWishlistToStorage = (wishlist) => {
    try {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    } catch (error) {
        console.error('Error saving wishlist to storage:', error);
    }
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: loadWishlistFromStorage(),
        loading: false,
        error: null
    },
    reducers: {
        addToWishlist: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            
            if (!existingItem) {
                state.items.push({
                    ...newItem,
                    addedAt: new Date().toISOString()
                });
                saveWishlistToStorage(state.items);
            }
        },
        removeFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            saveWishlistToStorage(state.items);
        },
        clearWishlist: (state) => {
            state.items = [];
            localStorage.removeItem('wishlist');
        },
        setWishlistLoading: (state, action) => {
            state.loading = action.payload;
        },
        setWishlistError: (state, action) => {
            state.error = action.payload;
        }
    }
});

// Async thunk for syncing wishlist with backend
export const syncWishlist = () => async (dispatch, getState) => {
    const { auth, wishlist } = getState();
    
    if (auth.isAuthenticated) {
        try {
            dispatch(setWishlistLoading(true));
            
            // Sync with backend
            const response = await fetch('/api/wishlist/sync', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`
                },
                body: JSON.stringify({ items: wishlist.items })
            });

            if (!response.ok) {
                throw new Error('Failed to sync wishlist');
            }

            const syncedWishlist = await response.json();
            dispatch(setWishlistItems(syncedWishlist));
            
        } catch (error) {
            dispatch(setWishlistError(error.message));
        } finally {
            dispatch(setWishlistLoading(false));
        }
    }
};

export const {
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    setWishlistLoading,
    setWishlistError
} = wishlistSlice.actions;

export default wishlistSlice.reducer;