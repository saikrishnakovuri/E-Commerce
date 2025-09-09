import React, { useState } from 'react';

const Sell = () => {
  const [price, setPrice] = useState(0);
  const commission = price * 0.1;
  const earnings = price * 0.9;

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 768px) {
          .admin-form {
            grid-template-columns: 1fr;
          }
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Sell on Shopify</h1>
      <p style={styles.description}>Join millions of sellers on our platform and reach a massive audience. We provide the tools and support you need to grow your business.</p>
      
      <div style={styles.adminForm} className="admin-form">
        <div style={styles.formGroup}>
          <label style={styles.label}>Sale Price (₹)</label>
          <input type="number" onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} style={styles.input} />
        </div>
      </div>
      <div style={{...styles.featureGrid, marginTop: '2rem'}} className="feature-grid">
        <div style={styles.featureCard}>
          <h3 style={styles.featureCardTitle}>Commission (10%)</h3>
          <p style={styles.featureCardText}>₹{commission.toFixed(2)}</p>
        </div>
        <div style={styles.featureCard}>
          <h3 style={styles.featureCardTitle}>Your Earnings (90%)</h3>
          <p style={styles.featureCardText}>₹{earnings.toFixed(2)}</p>
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
  description: {
    lineHeight: '1.6',
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '2rem',
  },
  adminForm: {
    display: 'grid',
    gridTemplateColumns: '1fr',
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
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  featureCard: {
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  },
  featureCardTitle: {
    marginTop: 0,
    color: '#333',
  },
  featureCardText: {
    color: '#555',
  },
};

export default Sell;