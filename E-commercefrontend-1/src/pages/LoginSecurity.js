import React from 'react';
import { useStateContext } from '../context/StateContext';

const LoginSecurity = () => {
  const { state, dispatch } = useStateContext();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const handleLogin = () => {
    dispatch({ type: 'LOGIN' });
  };

  const handleChange = (e) => {
    dispatch({ type: 'UPDATE_USER', payload: { [e.target.name]: e.target.value } });
  };

  return (
    <div style={styles.container}>
      <style>{`
        .action-button:hover { background-color: #f7ca00; }
        .login-button:hover { background-color: #0056b3; }

        @media (max-width: 768px) {
          .admin-form {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Login & Security</h1>
      {state.isAuthenticated ? (
        <button style={styles.actionButton} className="action-button" onClick={handleLogout}>Logout</button>
      ) : (
        <button style={{...styles.actionButton, ...styles.loginButton}} className="action-button login-button" onClick={handleLogin}>Login</button>
      )}

      <div style={styles.formContainer}>
        <div style={styles.adminForm} className="admin-form">
          <div style={styles.formGroup}>
            <label style={styles.label}>Mobile Number</label>
            <input type="text" name="mobile" value={state.user.mobile} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Security</label>
            <input type="text" name="security" value={state.user.security} onChange={handleChange} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Accessibility</label>
            <input type="text" name="accessibility" value={state.user.accessibility} onChange={handleChange} style={styles.input} />
          </div>
        </div>
      </div>
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
    marginBottom: '1.5rem',
  },
  loginButton: {
    backgroundColor: '#007bff',
    color: '#fff',
  },
  formContainer: {
    marginTop: '2rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #eee',
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
};

export default LoginSecurity;