import React, { createContext, useContext, useReducer, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  products: [],
  cart: null,
  orders: [],
  error: null,
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.payload.user };
    case 'LOGIN_FAIL':
      return { ...state, isAuthenticated: false, user: null, error: action.payload.error };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload.products };
    case 'FETCH_CART':
      return { ...state, cart: action.payload.cart };
    case 'FETCH_ORDERS':
      return { ...state, orders: action.payload.orders };
    case 'CART_UPDATED':
      return { ...state, cart: action.payload.cart };
    default:
      return state;
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const login = async (username, password) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        const token = await response.text();
        localStorage.setItem('token', token);
        // You might want to fetch user details here and dispatch them to the context
        // For now, we'll just use the username
        const user = { username }; // In a real app, you'd get the full user object
        dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
        fetchCart(user.username); // Fetch cart after login
      } else {
        dispatch({ type: 'LOGIN_FAIL', payload: { error: 'Login failed' } });
      }
    } catch (error) {
      dispatch({ type: 'LOGIN_FAIL', payload: { error: 'Login failed' } });
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`);
      if (response.ok) {
        const products = await response.json();
        dispatch({ type: 'FETCH_PRODUCTS', payload: { products } });
      }
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  const fetchCart = async (userId) => {
    try {
      // The backend expects a user ID, but we only have the username.
      // This is a placeholder. In a real app, you would get the user ID after login.
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/1`); // FIXME: Hardcoded user ID
      if (response.ok) {
        const cart = await response.json();
        dispatch({ type: 'FETCH_CART', payload: { cart } });
      }
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    }
  };

  const addToCart = async (userId, productId, quantity) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/${userId}/add/${productId}?quantity=${quantity}`, {
        method: 'POST',
      });
      if (response.ok) {
        const cart = await response.json();
        dispatch({ type: 'CART_UPDATED', payload: { cart } });
      }
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  const removeFromCart = async (userId, productId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/${userId}/remove/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const cart = await response.json();
        dispatch({ type: 'CART_UPDATED', payload: { cart } });
      }
    } catch (error) {
      console.error('Failed to remove from cart:', error);
    }
  };

  const updateCartItemQuantity = async (cartItemId, quantity) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart-items/${cartItemId}/quantity/${quantity}`, {
        method: 'PUT',
      });
      if (response.ok) {
        // After updating a cart item, we should refetch the whole cart to ensure consistency
        fetchCart(state.user.username); // FIXME: Hardcoded user ID
      }
    } catch (error) {
      console.error('Failed to update cart item quantity:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders`);
      if (response.ok) {
        const orders = await response.json();
        dispatch({ type: 'FETCH_ORDERS', payload: { orders } });
      }
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  const signup = async (userData) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch, login, signup, fetchProducts, fetchCart, fetchOrders, addToCart, removeFromCart, updateCartItemQuantity }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
