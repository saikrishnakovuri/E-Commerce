import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { couponCodes } from '../data/couponCodes';

const CartPage = ({ cart, setCart }) => {
    const [couponInput, setCouponInput] = useState("");
    const [appliedCoupon, setAppliedCoupon] = useState(null);
    const [couponError, setCouponError] = useState("");

    const cartItems = Object.keys(cart).map(id => {
        const product = products.find(p => p.id === parseInt(id));
        return { ...product, quantity: cart[id] };
    });

    const parsePrice = (priceStr) => parseFloat(priceStr.replace('₹', '').replace(',', ''));

    const subtotal = cartItems.reduce((total, item) => {
        return total + (parsePrice(item.price) * item.quantity);
    }, 0);

    const discount = appliedCoupon ? (subtotal * (couponCodes[appliedCoupon] / 100)) : 0;
    const totalCost = subtotal - discount;

    const handleApplyCoupon = () => {
        if (couponCodes[couponInput]) {
            setAppliedCoupon(couponInput);
            setCouponError("");
        } else {
            setCouponError("Invalid coupon code.");
            setAppliedCoupon(null);
        }
    };

    const handleIncrease = (id) => {
        setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const handleDecrease = (id) => {
        setCart((prev) => {
            if (prev[id] <= 1) {
                const newCart = { ...prev };
                delete newCart[id];
                return newCart;
            }
            return { ...prev, [id]: prev[id] - 1 };
        });
    };
    
    const handleRemove = (id) => {
        setCart(prev => {
            const newCart = {...prev};
            delete newCart[id];
            return newCart;
        })
    }

    if (cartItems.length === 0) {
        return (
            <div style={styles.cartPage}>
                <div style={styles.emptyCart}>
                    <h2 style={styles.emptyCartTitle}>Your cart is empty</h2>
                    <p style={styles.emptyCartText}>Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" style={styles.emptyCartLink}>Continue Shopping</Link>
                </div>
            </div>
        )
    }

    return (
      <div style={styles.cartPage}>
        <style>{`
            .quantity-selector button:hover { background-color: #e3e6e6; }
            .clear-filters-btn:hover { background-color: #e3e6e6; }
            .checkout-button:hover { background-color: #f7ca00; }
            .apply-coupon-btn:hover { background-color: #e3e6e6; }

            @media (max-width: 768px) {
                .cart-page {
                    flex-direction: column;
                    padding: 1rem;
                }
                .cart-summary {
                    position: static;
                    margin-top: 2rem;
                }
            }
        `}</style>
        <div style={styles.cartItemsContainer}>
            <h2 style={styles.cartItemsTitle}>Shopping Cart</h2>
            {cartItems.map(item => (
                <div key={item.id} style={styles.cartItem}>
                    <img src={item.image} alt={item.title} style={styles.cartItemImg}/>
                    <div style={styles.cartItemDetails}>
                        <h3 style={styles.cartItemTitle}>{item.title}</h3>
                        <p style={styles.cartItemPrice}>{item.price}</p>
                        <div style={styles.cartItemActions}>
                            <div style={styles.quantitySelector} className="quantity-selector">
                                <button onClick={() => handleDecrease(item.id)} style={styles.quantityButton}>-</button>
                                <span style={styles.quantityText}>{item.quantity}</span>
                                <button onClick={() => handleIncrease(item.id)} style={styles.quantityButton}>+</button>
                            </div>
                            <button onClick={() => handleRemove(item.id)} style={styles.removeButton} className="clear-filters-btn">Remove</button>
                        </div>
                    </div>
                    <p style={styles.cartItemSubtotal}>₹{(parsePrice(item.price) * item.quantity).toFixed(2)}</p>
                </div>
            ))}
        </div>
        <div style={styles.cartSummary}>
            <h2 style={styles.cartSummaryTitle}>Order Summary</h2>
            <div style={styles.summaryRow}>
                <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>₹{subtotal.toFixed(2)}</span>
            </div>
             <div style={styles.summaryRow}>
                <span>Shipping</span>
                <span>FREE</span>
            </div>
            {appliedCoupon && (
                <div style={{...styles.summaryRow, ...styles.discountRow}}>
                    <span>Discount ({couponCodes[appliedCoupon]}%)</span>
                    <span>- ₹{discount.toFixed(2)}</span>
                </div>
            )}
            <div style={{...styles.summaryRow, ...styles.summaryTotal}}>
                <span>Total</span>
                <span>₹{totalCost.toFixed(2)}</span>
            </div>
            <div style={styles.couponContainer}>
                <div style={styles.couponInputGroup}>
                    <input 
                        type="text" 
                        style={styles.couponInput} 
                        placeholder="Enter coupon code"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    />
                    <button style={styles.applyCouponBtn} className="apply-coupon-btn" onClick={handleApplyCoupon}>Apply</button>
                </div>
                {couponError && <p style={{...styles.couponMessage, ...styles.couponError}}>{couponError}</p>}
                {appliedCoupon && <p style={{...styles.couponMessage, ...styles.couponSuccess}}>Coupon "{appliedCoupon}" applied!</p>}
            </div>
            <button style={styles.checkoutButton} className="checkout-button">Proceed to Checkout</button>
        </div>
      </div>
    );
};

const styles = {
    cartPage: {
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'flex-start',
    },
    cartItemsContainer: {
        flex: 2,
        background: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    cartItemsTitle: {
        margin: '0',
        paddingBottom: '1rem',
        borderBottom: '1px solid #ddd',
        color: '#333',
    },
    cartItem: {
        display: 'flex',
        gap: '1.5rem',
        padding: '1.5rem 0',
        borderBottom: '1px solid #eee',
    },
    cartItemImg: {
        width: '100px',
        height: '100px',
        objectFit: 'contain',
    },
    cartItemDetails: {
        flex: 1,
    },
    cartItemTitle: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        margin: '0 0 0.5rem 0',
        color: '#333',
    },
    cartItemPrice: {
        fontSize: '1rem',
        color: '#555',
    },
    cartItemActions: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginTop: '1rem',
    },
    quantitySelector: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
    },
    quantityButton: {
        backgroundColor: '#f0f2f2',
        border: '1px solid #d5d9d9',
        borderRadius: '50%',
        cursor: 'pointer',
        width: '32px',
        height: '32px',
        fontSize: '1.2rem',
        lineHeight: 1,
        transition: 'background-color 0.2s',
    },
    quantityText: {
        fontSize: '1.1rem',
        fontWeight: 'bold',
        minWidth: '20px',
        textAlign: 'center',
    },
    removeButton: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#007bff',
        fontSize: '0.9rem',
        transition: 'color 0.2s',
    },
    cartItemSubtotal: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginLeft: 'auto',
        color: '#333',
    },
    emptyCart: {
        textAlign: 'center',
        padding: '3rem',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        maxWidth: '600px',
        margin: '2rem auto',
    },
    emptyCartTitle: {
        fontSize: '1.8rem',
        color: '#333',
    },
    emptyCartText: {
        color: '#555',
        marginBottom: '1.5rem',
    },
    emptyCartLink: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        padding: '0.8rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        transition: 'background-color 0.3s ease',
    },
    cartSummary: {
        flex: 1,
        background: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        position: 'sticky',
        top: '100px', // Adjust based on navbar height
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    cartSummaryTitle: {
        margin: '0',
        paddingBottom: '1rem',
        borderBottom: '1px solid #ddd',
        color: '#333',
    },
    summaryRow: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
        fontSize: '1.1rem',
        color: '#555',
    },
    summaryTotal: {
        fontWeight: 'bold',
        fontSize: '1.3rem',
        paddingTop: '1rem',
        borderTop: '1px solid #ddd',
        color: '#333',
    },
    checkoutButton: {
        width: '100%',
        padding: '1rem',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        color: '#111',
        backgroundColor: '#ffd814',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginTop: '1rem',
        transition: 'background-color 0.2s',
    },
    couponContainer: {
        marginTop: '1rem',
        paddingTop: '1rem',
        borderTop: '1px solid #eee',
    },
    couponInputGroup: {
        display: 'flex',
    },
    couponInput: {
        flex: 1,
        padding: '0.5rem',
        border: '1px solid #ddd',
        borderRadius: '4px 0 0 4px',
    },
    applyCouponBtn: {
        padding: '0.5rem 1rem',
        border: '1px solid #d5d9d9',
        background: '#f0f2f2',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    couponMessage: {
        marginTop: '0.5rem',
        fontSize: '0.9rem',
    },
    couponError: {
        color: '#B12704',
    },
    couponSuccess: {
        color: '#067D62',
    },
    discountRow: {
        color: '#067D62',
    },
};

export default CartPage;