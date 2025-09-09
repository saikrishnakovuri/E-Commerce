import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentOptions = () => {
  const [card, setCard] = useState({ number: '', expiry: '', cvv: '' });

  const handleCardChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const isCardValid = () => {
    return card.number.length === 16 && card.expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/) && card.cvv.length === 3;
  };

  return (
    <div style={styles.container}>
      <style>{`
        .feature-card:hover {
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        .complete-payment-button:hover { background-color: #0056b3; }

        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
          .admin-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Payment Options</h1>
      <div style={styles.featureGrid} className="feature-grid">
        <Link to="/account/payment/upi" style={styles.featureCard}>
          <h3 style={styles.featureCardTitle}>UPI</h3>
        </Link>
        <div style={styles.featureCard}>
          <h3 style={styles.featureCardTitle}>Stripe</h3>
          <p style={styles.featureCardText}>Stripe integration coming soon.</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureCardTitle}>Debit/Credit Card</h3>
          <div style={styles.adminForm} className="admin-form">
            <div style={styles.formGroup}>
              <label style={styles.label}>Card Number</label>
              <input type="text" name="number" onChange={handleCardChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Expiry Date (MM/YY)</label>
              <input type="text" name="expiry" onChange={handleCardChange} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>CVV</label>
              <input type="text" name="cvv" onChange={handleCardChange} style={styles.input} />
            </div>
            {isCardValid() && <button style={styles.completePaymentButton} className="complete-payment-button">Complete Payment</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1000px',
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
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  featureCard: {
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
  },
  featureCardTitle: {
    marginTop: 0,
    color: '#333',
  },
  featureCardText: {
    color: '#555',
  },
  adminForm: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1rem',
    marginTop: '1.5rem',
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
  completePaymentButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    backgroundColor: '#007bff',
    color: '#fff',
    marginTop: '1rem',
  },
};

export default PaymentOptions;