import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const YourOrders = () => {
  const { state } = useStateContext();

  return (
    <div style={styles.container}>
      <style>{`
        .add-to-cart:hover { background-color: #f7ca00; }
        .buy-now:hover { background-color: #e69500; }

        @media (max-width: 768px) {
          .order-card {
            padding: 1rem;
          }
        }
      `}</style>
      <h1 style={styles.title}>Your Orders</h1>
      {state.orders.length === 0 ? (
        <p style={styles.noOrdersText}>You have no orders yet.</p>
      ) : (
        state.orders.map(order => (
          <div key={order.id} style={styles.orderCard} className="order-card">
            <h3 style={styles.orderId}>Order #{order.id}</h3>
            <p style={styles.orderStatus}>Status: {order.status}</p>
            <div style={styles.orderItems}>
              {order.items.map((item, index) => (
                <p key={index} style={styles.orderItem}>- {item.name} ({item.price})</p>
              ))}
            </div>
            <div style={styles.orderActions}>
              {order.status === 'Delivered' ? (
                <>
                  <button style={styles.actionButton} className="add-to-cart">Return</button>
                  <button style={{...styles.actionButton, ...styles.buyNowButton}} className="add-to-cart buy-now">Buy Again</button>
                </>
              ) : (
                <Link to={`/track/${order.id}`} style={styles.trackLink}>
                  <button style={styles.actionButton} className="add-to-cart">Track</button>
                </Link>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '2rem auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  },
  title: {
    fontSize: '2.2rem',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  noOrdersText: {
    fontSize: '1.1rem',
    color: '#555',
    textAlign: 'center',
    padding: '2rem',
  },
  orderCard: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  },
  orderId: {
    fontSize: '1.4rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  orderStatus: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1rem',
  },
  orderItems: {
    marginBottom: '1rem',
  },
  orderItem: {
    fontSize: '1rem',
    color: '#666',
    margin: '0.5rem 0',
  },
  orderActions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  actionButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    backgroundColor: '#ffd814',
    color: '#111',
  },
  buyNowButton: {
    backgroundColor: '#ffa41c',
  },
  trackLink: {
    textDecoration: 'none',
  },
};

export default YourOrders;