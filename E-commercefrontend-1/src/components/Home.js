
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

function Home() {
  const { state, fetchProducts, addToCart, removeFromCart, updateCartItemQuantity } = useStateContext();
  const { products, cart, user } = state;
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    gender: 'all',
    size: 'all',
    sort: 'default'
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let tempProducts = [...products];

    // 1. Filter by sidebar category
    if (activeCategory !== 'all') {
      tempProducts = tempProducts.filter(p => p.category === activeCategory);
    }

    // 2. Filter by gender from filter panel
    if (filters.gender !== 'all') {
      tempProducts = tempProducts.filter(p => p.gender === filters.gender);
    }
    
    // 3. Filter by size from filter panel
    if (filters.size !== 'all') {
      tempProducts = tempProducts.filter(p => p.size === filters.size);
    }

    // 4. Sort by price
    const parsePrice = (priceStr) => parseFloat(priceStr.toString().replace('₹', '').replace(',', ''));
    
    if (filters.sort === 'low-to-high') {
      tempProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (filters.sort === 'high-to-low') {
      tempProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    }

    setFilteredProducts(tempProducts);

  }, [activeCategory, filters, products]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      gender: 'all',
      size: 'all',
      sort: 'default'
    });
    setActiveCategory('all');
  };

  const handleAddToCart = (productId) => {
    // FIXME: Hardcoded user ID
    addToCart(1, productId, 1);
  };

  const handleIncrease = (productId) => {
    const item = cart.items.find(item => item.product.id === productId);
    if (item) {
      updateCartItemQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrease = (productId) => {
    const item = cart.items.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    } else if (item && item.quantity === 1) {
      // FIXME: Hardcoded user ID
      removeFromCart(1, productId);
    }
  };
  
  const departments = [...new Set(products.map(p => p.category).filter(Boolean))];

  const getCartQuantity = (productId) => {
    if (!cart) return 0;
    const item = cart.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div style={styles.home}>
      <style>{`
        .sidebar button {
          background: none;
          border: none;
          cursor: pointer;
          color: #111;
          font-size: 0.9rem;
          text-align: left;
          padding: 8px;
          width: 100%;
          border-radius: 4px;
          transition: background-color 0.2s, color 0.2s, box-shadow 0.2s ease;
          box-shadow: none;
        }
        .sidebar button:hover {
          background-color: rgba(240, 242, 245, 0.8); /* Slightly lighter background */
          box-shadow: 0px 6px 12px rgba(0,0,0,0.3); /* Thicker shadow */
        }
        .sidebar .active-link button {
          color: #c45500;
          font-weight: bold;
          background-color: #fef6f0;
        }
        .top-categories li button {
          background-color: #f0f2f2;
          color: #0f1111;
          border: 1px solid #d5d9d9;
          padding: 8px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s ease;
          box-shadow: none;
        }
        .top-categories li button:hover {
          background-color: rgba(227, 230, 230, 0.8); /* Slightly lighter background */
          border-color: #c7caca;
          box-shadow: 0px 6px 12px rgba(0,0,0,0.3); /* Thicker shadow */
        }
        .filter-button {
          background-color: #fff;
          border: 1px solid #d5d9d9;
          padding: 8px 15px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.9rem;
          display: flex;
          align-items: 'center';
          gap: '5px';
          transition: background-color 0.2s, box-shadow 0.2s ease;
          box-shadow: none;
        }
        .filter-button:hover {
          background-color: rgba(255, 255, 255, 0.8); /* Slightly lighter background */
          box-shadow: 0px 6px 12px rgba(0,0,0,0.3); /* Thicker shadow */
        }
        .product-card:hover {
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
        .add-to-cart:hover { background-color: #f7ca00; }
        .quantity-selector button:hover { background-color: #e3e6e6; }

        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
            padding: 1rem;
          }
          .sidebar {
            width: 100%;
            margin-bottom: 1rem;
          }
          .products-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          }
        }
      `}</style>
      <section style={styles.mainContent}>
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarTitle}>Department</h3>
          <ul style={styles.sidebarList}>
             <li style={activeCategory === 'all' ? styles.activeLink : {}} className={activeCategory === 'all' ? "active-link" : ""}>
                <button onClick={() => setActiveCategory('all')} style={styles.sidebarButton}>ALL</button>
             </li>
            {departments.map((cat) => (
              <li key={cat} style={activeCategory === cat ? styles.activeLink : {}} className={activeCategory === cat ? "active-link" : ""}>
                <button onClick={() => setActiveCategory(cat)} style={styles.sidebarButton}>{cat.replace("-", " ").toUpperCase()}</button>
              </li>
            ))}
          </ul>
        </aside>
        <div style={styles.productsSection}>
          <div style={styles.topControls}>
            <nav style={styles.topCategories}>
              <ul style={styles.topCategoriesList}>
                <li><Link to="/deals"><button style={styles.topCategoryButton}>DEALS</button></Link></li>
                <li><Link to="/customer-service"><button style={styles.topCategoryButton}>CUSTOMER SERVICE</button></Link></li>
                <li><Link to="/registry"><button style={styles.topCategoryButton}>REGISTRY</button></Link></li>
                <li><Link to="/gift-cards"><button style={styles.topCategoryButton}>GIFT CARDS</button></Link></li>
                <li><Link to="/sell"><button style={styles.topCategoryButton}>SELL</button></Link></li>
              </ul>
            </nav>
            <button style={styles.filterButton} onClick={() => setShowFilters(!showFilters)} className="filter-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filters
            </button>
          </div>

          {showFilters && (
            <div style={styles.filterPanel}>
              <div style={styles.filterGrid}>
                <div style={styles.filterGroup}>
                  <label htmlFor="gender-filter" style={styles.filterLabel}>Gender</label>
                  <select id="gender-filter" name="gender" value={filters.gender} onChange={handleFilterChange} style={styles.filterSelect}>
                    <option value="all">All</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="unisex">Unisex</option>
                  </select>
                </div>
                <div style={styles.filterGroup}>
                  <label htmlFor="department-filter" style={styles.filterLabel}>Department</label>
                  <select id="department-filter" name="category" value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} style={styles.filterSelect}>
                    <option value="all">All</option>
                    {departments.map(cat => <option key={cat} value={cat}>{cat.replace("-", " ").toUpperCase()}</option>)}
                  </select>
                </div>
                <div style={styles.filterGroup}>
                  <label htmlFor="size-filter" style={styles.filterLabel}>Size</label>
                  <select id="size-filter" name="size" value={filters.size} onChange={handleFilterChange} style={styles.filterSelect}>
                    <option value="all">All</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                  </select>
                </div>
                <div style={styles.filterGroup}>
                  <label htmlFor="sort-filter" style={styles.filterLabel}>Price</label>
                  <select id="sort-filter" name="sort" value={filters.sort} onChange={handleFilterChange} style={styles.filterSelect}>
                    <option value="default">Default</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                  </select>
                </div>
              </div>
              <div style={styles.filterActions}>
                <button style={styles.clearFiltersBtn} onClick={clearFilters}>Clear Filters</button>
              </div>
            </div>
          )}

          <div style={styles.productsGrid}>
            {filteredProducts.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} style={styles.productCard}>
                <img src={product.image} alt={product.name} style={styles.productImage} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/200x200/f0f0f0/333?text=Image+Not+Found'; }}/>
                <h3>{product.name}</h3>
                <div style={styles.productPrice}>₹{product.price}</div>
                {getCartQuantity(product.id) === 0 ? (
                  <button style={styles.addToCartButton} onClick={(e) => {e.preventDefault(); handleAddToCart(product.id)}}>Add to Cart</button>
                ) : (
                  <div style={styles.quantitySelector} onClick={(e) => e.preventDefault()}>
                    <button onClick={() => handleDecrease(product.id)} style={styles.quantityButton}>-</button>
                    <span style={styles.quantityText}>{getCartQuantity(product.id)}</span>
                    <button onClick={() => handleIncrease(product.id)} style={styles.quantityButton}>+</button>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  home: {
    backgroundColor: '#eaeded',
  },
  mainContent: {
    display: 'flex',
    padding: '1.5rem',
    margin: '0 auto',
    maxWidth: '1500px',
    gap: '1.5rem',
    alignItems: 'flex-start',
  },
  sidebar: {
    width: '200px',
    flexShrink: 0,
    height: 'fit-content',
    backgroundColor: '#fff',
    padding: '1rem',
    borderRadius: '8px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
  },
  sidebarTitle: {
    marginTop: 0,
    marginBottom: '15px',
    fontSize: '1.1rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px',
  },
  sidebarList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sidebarListItem: {
    padding: '2px 0',
  },
  sidebarButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#111',
    fontSize: '0.9rem',
    textAlign: 'left',
    padding: '8px',
    width: '100%',
    borderRadius: '4px',
    transition: 'background-color 0.2s, color 0.2s, box-shadow 0.2s ease',
  },
  activeLink: {
    // This will be handled by the className and CSS in style tag
  },
  productsSection: {
    flex: 1,
    minWidth: 0,
  },
  topControls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
    borderBottom: '1px solid #ddd',
    paddingBottom: '1.5rem',
  },
  topCategories: {
    // styles for the nav container
  },
  topCategoriesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  topCategoryButton: {
    backgroundColor: '#f0f2f2',
    color: '#0f1111',
    border: '1px solid #d5d9d9',
    padding: '8px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background-color 0.2s, border-color 0.2s, box-shadow 0.2s ease',
  },
  filterButton: {
    backgroundColor: '#fff',
    border: '1px solid #d5d9d9',
    padding: '8px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    transition: 'background-color 0.2s, box-shadow 0.2s ease',
  },
  filterPanel: {
    background: '#fff',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginBottom: '1.5rem',
  },
  filterGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '1.5rem',
  },
  filterGroup: {
    // styles for filter group
  },
  filterLabel: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
  },
  filterSelect: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    cursor: 'pointer',
  },
  filterActions: {
    marginTop: '1.5rem',
    paddingTop: '1.5rem',
    borderTop: '1px solid #eee',
    display: 'flex',
    gap: '1rem',
  },
  clearFiltersBtn: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: '#f0f2f2',
    color: '#0f1111',
    border: '1px solid #d5d9d9',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '1.5rem',
    width: '100%',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    padding: '1.5rem 1rem',
    background: 'white',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
  },
  productImage: {
    maxWidth: '100%',
    height: '180px',
    objectFit: 'contain',
    marginBottom: '1rem',
  },
  productTitle: {
    fontSize: '1rem',
    lineHeight: '1.4',
    color: '#0f1111',
    margin: '0.5rem 0',
    flexGrow: 1,
  },
  productPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0 1rem 0',
    color: '#0f1111',
  },
  addToCartButton: {
    backgroundColor: '#ffd814',
    border: 'none',
    padding: '10px 1rem',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: '500',
    transition: 'background-color 0.2s',
    width: '100%',
  },
  quantitySelector: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  quantityButton: {
    backgroundColor: '#f0f2f2',
    border: '1px solid #d5d9d9',
    borderRadius: '50%',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    fontSize: '1.2rem',
    lineHeight: 1,
    transition: 'background-color 0.2s',
  },
  quantityText: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    minWidth: '20px',
  },
};

export default Home;
