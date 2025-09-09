import React, { useState } from 'react';

const Registry = () => {
  const [registry, setRegistry] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim()) {
      setRegistry([...registry, newItem]);
      setNewItem('');
    }
  };

  return (
    <div style={styles.container}>
      <style>{`
        .add-item-button:hover { background-color: #0056b3; }
        .feature-card:hover {
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .admin-form {
            grid-template-columns: 1fr;
          }
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Gift Registry</h1>
      <p style={styles.description}>Create a registry for your wedding, baby shower, or any other special occasion. Share it with friends and family to get the gifts you really want.</p>
      
      <div style={styles.adminForm} className="admin-form">
        <div style={styles.formGroup}>
          <label style={styles.label}>Add Item</label>
          <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} style={styles.input} />
        </div>
        <button style={styles.addItemButton} className="add-item-button" onClick={handleAddItem}>Add to Registry</button>
      </div>

      {registry.length > 0 && (
        <div style={{...styles.featureGrid, marginTop: '2rem'}} className="feature-grid">
          {registry.map((item, index) => (
            <div key={index} style={styles.featureCard} className="feature-card">
              <p style={styles.featureCardText}>{item}</p>
            </div>
          ))}
        </div>
      )}
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
    gridTemplateColumns: '1fr auto',
    gap: '1.5rem',
    marginTop: '1.5rem',
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    alignItems: 'flex-end',
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
  addItemButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    backgroundColor: '#007bff',
    color: '#fff',
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
  featureCardText: {
    color: '#555',
  },
};

export default Registry;