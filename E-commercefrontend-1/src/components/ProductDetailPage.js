import React from 'react';
import { useParams } from "react-router-dom";
import { products } from '../data/products';

const ProductDetailPage = ({ cart, setCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h2 style={styles.notFound}>Product not found</h2>;
    }

    const handleAddToCart = (id) => setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

    return (
        <div style={styles.productDetailPage}>
            <style>{`
                .add-to-cart:hover { background-color: #f7ca00; }
                .buy-now:hover { background-color: #e69500; }

                @media (max-width: 768px) {
                    .product-detail-page {
                        flex-direction: column;
                        padding: 1rem;
                    }
                    .product-detail-image img {
                        max-height: 300px;
                    }
                    .product-detail-actions {
                        flex-direction: column;
                    }
                }
            `}</style>
            <div style={styles.productDetailImage}>
                <img src={product.image} alt={product.title} style={styles.productImage} />
            </div>
            <div style={styles.productDetailInfo}>
                <h1 style={styles.productTitle}>{product.title}</h1>
                <div style={styles.productPrice}>{product.price}</div>
                <p style={styles.productDescription}>{product.description}</p>
                <div style={styles.productDetailActions}>
                    <button style={styles.addToCartButton} className="add-to-cart" onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
                    <button style={{...styles.addToCartButton, ...styles.buyNowButton}} className="add-to-cart buy-now">Buy Now</button>
                </div>
                <div style={styles.reviewsSection}>
                    <h2 style={styles.reviewsTitle}>Customer Reviews</h2>
                    <div style={styles.review}>
                        <div style={styles.reviewAuthor}>John Doe</div>
                        <div style={styles.reviewRating}>★★★★☆</div>
                        <p>Great product! Highly recommended.</p>
                    </div>
                    <div style={styles.review}>
                        <div style={styles.reviewAuthor}>Jane Smith</div>
                        <div style={styles.reviewRating}>★★★★★</div>
                        <p>Excellent quality and fast shipping.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    notFound: {
        textAlign: 'center',
        padding: '2rem',
    },
    productDetailPage: {
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '2rem auto',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    },
    productDetailImage: {
        flex: 1,
        textAlign: 'center',
    },
    productImage: {
        maxWidth: '100%',
        maxHeight: '500px',
        objectFit: 'contain',
    },
    productDetailInfo: {
        flex: 1,
    },
    productTitle: {
        fontSize: '2rem',
        margin: '0 0 1rem 0',
        color: '#333',
    },
    productPrice: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#B12704',
        margin: '1rem 0',
    },
    productDescription: {
        lineHeight: '1.6',
        margin: '1.5rem 0',
        color: '#555',
    },
    productDetailActions: {
        display: 'flex',
        gap: '1rem',
        marginTop: '2rem',
    },
    addToCartButton: {
        flex: 1,
        padding: '1rem',
        fontSize: '1.1rem',
        borderRadius: '8px',
        backgroundColor: '#ffd814',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        transition: 'background-color 0.2s',
    },
    buyNowButton: {
        backgroundColor: '#ffa41c',
    },
    reviewsSection: {
        marginTop: '3rem',
        paddingTop: '2rem',
        borderTop: '1px solid #ddd',
    },
    reviewsTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
        color: '#333',
    },
    review: {
        borderBottom: '1px solid #eee',
        padding: '1.5rem 0',
    },
    reviewAuthor: {
        fontWeight: 'bold',
        color: '#333',
    },
    reviewRating: {
        color: '#ffa41c',
        marginBottom: '0.5rem',
    },
};

export default ProductDetailPage;