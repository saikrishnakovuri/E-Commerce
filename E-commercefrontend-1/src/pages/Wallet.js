import React from 'react';
import { useStateContext } from '../context/StateContext';

const Wallet = () => {
  const { state } = useStateContext();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopify Wallet</h1>
      <h2 style={styles.balance}>Balance: ₹{state.walletBalance.toFixed(2)}</h2>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '2rem auto',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1rem',
    marginBottom: '1.5rem',
    color: '#333',
  },
  balance: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#067D62',
    marginTop: '2rem',
  },
};

export default Wallet;