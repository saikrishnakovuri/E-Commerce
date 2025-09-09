import React from 'react';

const UPI = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>UPI Payment</h1>
      <p style={styles.text}>UPI payment details will be displayed here.</p>
      <p style={styles.text}>Please scan the QR code or enter the UPI ID to complete the payment.</p>
      <div style={styles.qrCodePlaceholder}>QR Code Placeholder</div>
      <p style={styles.text}>UPI ID: example@upi</p>
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
  text: {
    fontSize: '1.1rem',
    color: '#555',
    marginBottom: '1rem',
  },
  qrCodePlaceholder: {
    width: '200px',
    height: '200px',
    backgroundColor: '#f0f0f0',
    margin: '2rem auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px dashed #ccc',
    borderRadius: '8px',
    color: '#888',
  },
};

export default UPI;