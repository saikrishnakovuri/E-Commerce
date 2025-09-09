import React, { useState } from 'react';
import { useStateContext } from '../context/StateContext';

const YourAddress = () => {
  const { state, dispatch } = useStateContext();
  const [showForm, setShowForm] = useState(false);
  const [address, setAddress] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    address1: '',
    address2: '',
    pincode: '',
    city: '',
    state: '',
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ADDRESS', payload: address });
    setShowForm(false);
  };

  return (
    <div style={styles.container}>
      <style>{`
        .add-address-button:hover { background-color: #f7ca00; }
        .save-address-button:hover { background-color: #0056b3; }

        @media (max-width: 768px) {
          .admin-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Your Addresses</h1>
      {state.addresses.length === 0 && !showForm && (
        <button style={styles.addAddressButton} className="add-address-button" onClick={() => setShowForm(true)}>Add Address</button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} style={styles.adminForm} className="admin-form">
          <div style={styles.formGroup}>
            <label style={styles.label}>First Name</label>
            <input type="text" name="firstName" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Last Name</label>
            <input type="text" name="lastName" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Mobile Number</label>
            <input type="text" name="mobile" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Address Line 1</label>
            <input type="text" name="address1" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Address Line 2</label>
            <input type="text" name="address2" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Pincode</label>
            <input type="text" name="pincode" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>City</label>
            <input type="text" name="city" onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>State</label>
            <input type="text" name="state" onChange={handleChange} style={styles.input} />
          </div>
          <button type="submit" style={styles.saveAddressButton} className="save-address-button">Save Address</button>
        </form>
      )}

      {state.addresses.map((addr, index) => (
        <div key={index} style={styles.addressCard}>
          <p>{addr.firstName} {addr.lastName}</p>
          <p>{addr.address1}, {addr.address2}</p>
          <p>{addr.city}, {addr.state} - {addr.pincode}</p>
          <p>Mobile: {addr.mobile}</p>
        </div>
      ))}
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
  addAddressButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    backgroundColor: '#ffd814',
    color: '#111',
    marginBottom: '1.5rem',
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
  saveAddressButton: {
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
  },
  addressCard: {
    border: '1px solid #eee',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1.5rem',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    lineHeight: '1.5',
    color: '#555',
  },
};

export default YourAddress;