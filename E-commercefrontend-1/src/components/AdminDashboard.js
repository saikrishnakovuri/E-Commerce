import React, { useState } from 'react';
import { products } from '../data/products';

const AdminDashboard = () => {
    const [allProducts, setAllProducts] = useState(products);
    const [newProduct, setNewProduct] = useState({ title: "", price: "", image: "", category: "", gender: "", size: "", description: "" });

    const handleAddProduct = () => {
        setAllProducts(prev => [...prev, { ...newProduct, id: prev.length + 1 }]);
        setNewProduct({ title: "", price: "", image: "", category: "", gender: "", size: "", description: "" });
    };

    return (
        <div style={styles.container}>
            <style>{`
                .admin-table th {
                    background-color: #f0f2f5;
                }
                .admin-table tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                .admin-table tr:hover {
                    background-color: #f0f0f0;
                }
                .add-product-button:hover {
                    background-color: #f7ca00;
                }

                @media (max-width: 768px) {
                    .admin-form {
                        grid-template-columns: 1fr;
                    }
                    .admin-table {
                        display: block;
                        overflow-x: auto;
                        white-space: nowrap;
                    }
                    .admin-table thead, .admin-table tbody, .admin-table th, .admin-table td, .admin-table tr {
                        display: block;
                    }
                    .admin-table thead tr {
                        position: absolute;
                        top: -9999px;
                        left: -9999px;
                    }
                    .admin-table tr {
                        border: 1px solid #ddd;
                        margin-bottom: 10px;
                    }
                    .admin-table td {
                        border: none;
                        border-bottom: 1px solid #eee;
                        position: relative;
                        padding-left: 50%;
                        text-align: right;
                    }
                    .admin-table td:before {
                        position: absolute;
                        top: 6px;
                        left: 6px;
                        width: 45%;
                        padding-right: 10px;
                        white-space: nowrap;
                        text-align: left;
                        font-weight: bold;
                    }
                    .admin-table td:nth-of-type(1):before { content: "ID"; }
                    .admin-table td:nth-of-type(2):before { content: "Title"; }
                    .admin-table td:nth-of-type(3):before { content: "Price"; }
                    .admin-table td:nth-of-type(4):before { content: "Category"; }
                }
            `}</style>
            <h1 style={styles.title}>Admin Dashboard</h1>
            
            <div style={styles.sectionCard}>
                <h2 style={styles.sectionTitle}>Manage Products</h2>
                <div style={styles.tableContainer}>
                    <table style={styles.adminTable} className="admin-table">
                        <thead>
                            <tr>
                                <th style={styles.tableHeader}>ID</th>
                                <th style={styles.tableHeader}>Title</th>
                                <th style={styles.tableHeader}>Price</th>
                                <th style={styles.tableHeader}>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map(p => (
                                <tr key={p.id}>
                                    <td style={styles.tableCell}>{p.id}</td>
                                    <td style={styles.tableCell}>{p.title}</td>
                                    <td style={styles.tableCell}>{p.price}</td>
                                    <td style={styles.tableCell}>{p.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={styles.sectionCard}>
                <h2 style={styles.sectionTitle}>Add New Product</h2>
                <div style={styles.adminForm} className="admin-form">
                    <div style={styles.formGroup}>
                        <label style={styles.label}>Title</label>
                        <input type="text" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} style={styles.input} />
                    </div>
                     <div style={styles.formGroup}>
                        <label style={styles.label}>Price</label>
                        <input type="text" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} style={styles.input} />
                    </div>
                     <div style={styles.formGroup}>
                        <label style={styles.label}>Image URL</label>
                        <input type="text" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} style={styles.input} />
                    </div>
                     <div style={styles.formGroup}>
                        <label style={styles.label}>Category</label>
                        <input type="text" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} style={styles.input} />
                    </div>
                </div>
                 <button style={styles.addProductButton} className="add-product-button" onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '1400px',
        margin: '2rem auto',
        backgroundColor: '#f0f2f5',
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
    sectionCard: {
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        marginBottom: '2rem',
    },
    sectionTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        borderBottom: '1px solid #eee',
        paddingBottom: '0.5rem',
        color: '#333',
    },
    tableContainer: {
        overflowX: 'auto',
    },
    adminTable: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '1rem',
    },
    tableHeader: {
        border: '1px solid #ddd',
        padding: '0.75rem',
        textAlign: 'left',
        backgroundColor: '#f7f7f7',
        color: '#333',
    },
    tableCell: {
        border: '1px solid #ddd',
        padding: '0.75rem',
        textAlign: 'left',
        color: '#555',
    },
    adminForm: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1.5rem',
        marginTop: '1.5rem',
        padding: '1.5rem',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
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
    addProductButton: {
        backgroundColor: '#ffd814',
        border: 'none',
        padding: '10px 1rem',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
        color: '#111',
        marginTop: '1.5rem',
        gridColumn: '1 / -1',
    },
};

export default AdminDashboard;