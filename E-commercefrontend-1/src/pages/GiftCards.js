import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const GiftCards = () => {
  const { dispatch } = useStateContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');
  const [buyForm, setBuyForm] = useState({ amount: '', recipientName: '', recipientPhone: '', recipientEmail: '' });
  const [redeemCode, setRedeemCode] = useState('');

  const handleBuyChange = (e) => {
    setBuyForm({ ...buyForm, [e.target.name]: e.target.value });
  };

  const handleBuySubmit = (e) => {
    e.preventDefault();
    // Apply 10% discount
    const discountedAmount = parseFloat(buyForm.amount) * 0.9;
    console.log('Buying gift card for:', { ...buyForm, amount: discountedAmount });
    navigate('/account/payment');
  };

  const handleRedeem = () => {
    const amount = parseInt(redeemCode);
    if (!isNaN(amount) && amount > 0) {
      dispatch({ type: 'UPDATE_WALLET', payload: amount });
      setRedeemCode('');
      alert(`Successfully redeemed ₹${amount} to your wallet!`);
    } else {
      alert('Please enter a valid amount to redeem.');
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        .tab-button:hover { background-color: #f0f0f0; }
        .tab-button.active { background-color: #007bff; color: #fff; }
        .submit-button:hover { background-color: #0056b3; }

        @media (max-width: 768px) {
          .admin-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Gift Cards</h1>
      <div style={styles.tabContainer}>
        <button 
          style={{...styles.tabButton, ...(activeTab === 'buy' ? styles.activeTabButton : {})}} 
          className="tab-button" 
          onClick={() => setActiveTab('buy')}
        >
          Buy a Gift Card
        </button>
        <button 
          style={{...styles.tabButton, ...(activeTab === 'redeem' ? styles.activeTabButton : {})}} 
          className="tab-button" 
          onClick={() => setActiveTab('redeem')}
        >
          Redeem a Gift Card
        </button>
      </div>

      {activeTab === 'buy' && (
        <form onSubmit={handleBuySubmit} style={styles.adminForm} className="admin-form">
          <div style={styles.formGroup}>
            <label style={styles.label}>Amount (₹)</label>
            <input type="number" name="amount" onChange={handleBuyChange} style={styles.input} required />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Recipient Name (optional)</label>
            <input type="text" name="recipientName" onChange={handleBuyChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Recipient Phone (optional)</label>
            <input type="text" name="recipientPhone" onChange={handleBuyChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Recipient Email</label>
            <input type="email" name="recipientEmail" onChange={handleBuyChange} style={styles.input} required />
          </div>
          <button type="submit" style={styles.submitButton} className="submit-button">Proceed to Payment</button>
        </form>
      )}

      {activeTab === 'redeem' && (
        <div style={styles.adminForm} className="admin-form">
          <div style={styles.formGroup}>
            <label style={styles.label}>Redeem Code (Enter Amount)</label>
            <input type="text" value={redeemCode} onChange={(e) => setRedeemCode(e.target.value)} style={styles.input} />
          </div>
          <button style={styles.submitButton} className="submit-button" onClick={handleRedeem}>Redeem</button>
        </div>
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
  tabContainer: {
    display: 'flex',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #eee',
  },
  tabButton: {
    padding: '10px 20px',
    border: 'none',
    background: '#f9f9f9',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px 8px 0 0',
    transition: 'background-color 0.2s, color 0.2s',
    marginRight: '5px',
  },
  activeTabButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  adminForm: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginTop: '1.5rem',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '0.5rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  submitButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    backgroundColor: '#007bff',
    color: '#fff',
    gridColumn: '1 / -1',
    marginTop: '1rem',
  },
};

export default GiftCards;