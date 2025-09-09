import React from 'react';

const GlobalStyles = () => (
  <style>{`
    /* index.css */
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: #eaeded;
      cursor: default; /* Set default cursor for the whole page */
    }

    /* NavBar.css */
    .navbar {
      display: flex;
      align-items: center;
      padding: 10px 25px;
      background-color: #232f3e;
      color: white;
      position: sticky;
      top: 0;
      z-index: 100;
      gap: 20px;
      border-bottom: 1px solid #1a2430;
    }
    .navbar-content {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 20px;
    }
    .navbar-logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: white;
      text-decoration: none;
      padding: 5px;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: border-color 0.2s ease;
      cursor: pointer;
    }
    .navbar-logo:hover { border-color: white; }
    .navbar-search {
      display: flex;
      flex: 1;
      position: relative;
      max-width: 800px;
    }
    .navbar-search input {
      width: 100%;
      padding: 10px 15px;
      border: none;
      border-radius: 4px 0 0 4px;
      font-size: 1rem;
      cursor: text; /* Explicitly set text cursor for search input */
    }
    .navbar-search input:focus {
        outline: 3px solid #febd69;
        outline-offset: -1px;
        z-index: 10;
    }
    .search-button {
      padding: 0 12px;
      background-color: #febd69;
      border: none;
      border-radius: 0 4px 4px 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #111;
      transition: background-color 0.2s;
    }
    .search-button:hover { background-color: #f3a847; }
    .search-suggestions {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      color: black;
      border: 1px solid #ddd;
      border-top: none;
      list-style: none;
      padding: 0;
      margin: 0;
      z-index: 101;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .search-suggestions li { padding: 10px 15px; cursor: pointer; font-size: 0.95rem; }
    .search-suggestions li:hover { background-color: #f0f0f0; }
    .navbar-nav { display: flex; align-items: center; gap: 15px; }
    .nav-link {
      color: white;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      padding: 5px;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: border-color 0.2s ease;
      cursor: pointer;
    }
    .nav-link:hover { border-color: white; }
    .nav-line-one { font-size: 0.75rem; color: #ccc; }
    .nav-line-two { font-size: 0.9rem; font-weight: bold; }
    .nav-cart { flex-direction: row; align-items: flex-end; gap: 5px; }
    .cart-count {
        font-size: 1.1rem;
        font-weight: bold;
        color: #febd69;
        position: relative;
        bottom: 12px;
        right: 20px;
    }
    .cart-text { position: relative; bottom: 2px; }

    /* home.css */
    .main-content {
      display: flex;
      padding: 1.5rem;
      margin: 0 auto;
      max-width: 1500px;
      gap: 1.5rem;
      align-items: flex-start;
    }
    .sidebar {
      width: 200px;
      flex-shrink: 0;
      height: fit-content;
      background-color: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .sidebar h3 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 1.1rem;
      border-bottom: 1px solid #eee;
      padding-bottom: 10px;
    }
    .sidebar ul { list-style: none; padding: 0; margin: 0; }
    .sidebar li { padding: 2px 0; }
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
      transition: background-color 0.2s, color 0.2s;
    }
    .sidebar button:hover { background-color: #f0f0f0; }
    .sidebar .active-link button {
      color: #c45500;
      font-weight: bold;
      background-color: #fef6f0;
    }
    .products-section { flex: 1; min-width: 0; }
    .top-controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      border-bottom: 1px solid #ddd;
      padding-bottom: 1.5rem;
    }
    .top-categories ul {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .top-categories li button {
      background-color: #f0f2f2;
      color: #0f1111;
      border: 1px solid #d5d9d9;
      padding: 8px 15px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.2s, border-color 0.2s;
    }
    .top-categories li button:hover { background-color: #e3e6e6; border-color: #c7caca; }
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1.5rem;
      width: 100%;
    }
    .product-card {
      border: 1px solid #ddd;
      border-radius: 8px;
      text-align: center;
      padding: 1.5rem 1rem;
      background: white;
      transition: box-shadow 0.2s ease, transform 0.2s ease;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer; 
    }
    .product-card:hover {
      box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
      transform: translateY(-5px);
    }
    .product-card img {
      max-width: 100%;
      height: 180px;
      object-fit: contain;
      margin-bottom: 1rem;
    }
    .product-card h3 {
        font-size: 1rem;
        line-height: 1.4;
        color: #0f1111;
        margin: 0.5rem 0;
        flex-grow: 1;
    }
    .product-card .price {
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0.5rem 0 1rem 0;
      color: #0f1111;
    }
    .add-to-cart {
      background-color: #ffd814;
      border: none;
      padding: 10px 1rem;
      border-radius: 20px;
      cursor: pointer;
      font-weight: 500;
      transition: background-color 0.2s;
      width: 100%;
    }
    .add-to-cart:hover { background-color: #f7ca00; }
    .quantity-selector {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        margin-top: 10px;
    }
    .quantity-selector button {
        background-color: #f0f2f2;
        border: 1px solid #d5d9d9;
        border-radius: 50%;
        cursor: pointer;
        width: 32px;
        height: 32px;
        font-size: 1.2rem;
        line-height: 1;
        transition: background-color 0.2s;
    }
    .quantity-selector button:hover { background-color: #e3e6e6; }
    .quantity-selector span {
        font-size: 1.1rem;
        font-weight: bold;
        min-width: 20px;
    }

    /* Filter Panel */
    .filter-button {
        background-color: #fff;
        border: 1px solid #d5d9d9;
        padding: 8px 15px;
        border-radius: 8px;
        cursor: pointer;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    .filter-panel {
        background: #fff;
        padding: 1.5rem;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 1.5rem;
    }
    .filter-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 1.5rem;
    }
    .filter-group label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
    .filter-group select {
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ddd;
        cursor: pointer;
    }
    .filter-actions {
        margin-top: 1.5rem;
        padding-top: 1.5rem;
        border-top: 1px solid #eee;
        display: flex;
        gap: 1rem;
    }
    .filter-actions button {
        padding: 10px 20px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-weight: bold;
    }
    .clear-filters-btn {
        background-color: #f0f2f2;
        color: #0f1111;
        border: 1px solid #d5d9d9;
    }

    /* AuthPage.css */
    .account-page {
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
    }
    .account-page h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }
    .account-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
    }
    .account-card {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        transition: box-shadow 0.2s ease, transform 0.2s ease;
        cursor: pointer;
    }
    .account-card:hover {
        box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
        transform: translateY(-5px);
    }
    .account-card-icon {
        flex-shrink: 0;
    }
    .account-card-icon svg {
        width: 40px;
        height: 40px;
        color: #555;
    }
    .account-card-title {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 0 0 0.25rem 0;
    }
    .account-card-description {
        font-size: 0.9rem;
        color: #555;
    }

    /* CartPage.css */
    .cart-page {
        display: flex;
        gap: 2rem;
        padding: 2rem;
        max-width: 1200px;
        margin: 0 auto;
        align-items: flex-start;
    }
    .cart-items-container {
        flex: 2;
        background: #fff;
        padding: 1.5rem;
        border-radius: 8px;
    }
    .cart-items-container h2 {
        margin-top: 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ddd;
    }
    .cart-item {
        display: flex;
        gap: 1.5rem;
        padding: 1.5rem 0;
        border-bottom: 1px solid #eee;
    }
    .cart-item:last-child {
        border-bottom: none;
    }
    .cart-item-img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
    .cart-item-details {
        flex: 1;
    }
    .cart-item-title {
        font-weight: bold;
        font-size: 1.1rem;
        margin: 0 0 0.5rem 0;
    }
    .cart-item-price {
        font-size: 1rem;
        color: #555;
    }
    .cart-item-actions {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;
    }
    .cart-item-subtotal {
        font-weight: bold;
        font-size: 1.1rem;
        margin-left: auto;
    }
    .empty-cart {
        text-align: center;
        padding: 3rem;
    }
    .cart-summary {
        flex: 1;
        background: #fff;
        padding: 1.5rem;
        border-radius: 8px;
        position: sticky;
        top: 100px; /* Adjust based on navbar height */
    }
    .cart-summary h2 {
        margin-top: 0;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ddd;
    }
    .summary-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
        font-size: 1.1rem;
    }
    .summary-total {
        font-weight: bold;
        font-size: 1.3rem;
        padding-top: 1rem;
        border-top: 1px solid #ddd;
    }
    .checkout-button {
        width: 100%;
        padding: 1rem;
        font-size: 1.1rem;
        font-weight: bold;
        color: #111;
        background-color: #ffd814;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 1rem;
    }
    .coupon-container {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid #eee;
    }
    .coupon-input-group {
        display: flex;
    }
    .coupon-input {
        flex: 1;
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px 0 0 4px;
    }
    .apply-coupon-btn {
        padding: 0.5rem 1rem;
        border: 1px solid #d5d9d9;
        background-color: #f0f2f2;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
    }
    .coupon-message {
        margin-top: 0.5rem;
        font-size: 0.9rem;
    }
    .coupon-error {
        color: #B12704;
    }
    .coupon-success {
        color: #067D62;
    }
    .discount-row {
        color: #067D62;
    }

    /* Generic Page Styles */
    .generic-page {
        padding: 2rem;
        max-width: 1000px;
        margin: 2rem auto;
        background: #fff;
        border-radius: 8px;
    }
    .generic-page h1 {
        font-size: 2.2rem;
        border-bottom: 1px solid #ddd;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }
    .generic-page h2 {
        font-size: 1.5rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #eee;
        padding-bottom: 0.5rem;
    }
    .generic-page p {
        line-height: 1.6;
        font-size: 1.1rem;
    }
    .generic-page .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 2rem;
    }
    .generic-page .feature-card {
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }
    .generic-page .feature-card h3 {
        margin-top: 0;
    }
    
    /* Product Detail Page */
    .product-detail-page {
        display: flex;
        gap: 2rem;
        padding: 2rem;
        max-width: 1200px;
        margin: 2rem auto;
        background: #fff;
        border-radius: 8px;
    }
    .product-detail-image {
        flex: 1;
        text-align: center;
    }
    .product-detail-image img {
        max-width: 100%;
        max-height: 500px;
        object-fit: contain;
    }
    .product-detail-info {
        flex: 1;
    }
    .product-detail-info h1 {
        font-size: 2rem;
        margin-top: 0;
    }
    .product-detail-info .price {
        font-size: 1.8rem;
        font-weight: bold;
        color: #B12704;
        margin: 1rem 0;
    }
    .product-detail-info .description {
        line-height: 1.6;
        margin: 1.5rem 0;
    }
    .product-detail-actions {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
    }
    .product-detail-actions .add-to-cart,
    .product-detail-actions .buy-now {
        flex: 1;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 8px;
    }
    .buy-now {
        background-color: #ffa41c;
    }
    .reviews-section {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #ddd;
    }
    .review {
        border-bottom: 1px solid #eee;
        padding: 1.5rem 0;
    }
    .review:last-child {
        border-bottom: none;
    }
    .review-author {
        font-weight: bold;
    }
    .review-rating {
        color: #ffa41c;
    }

    /* Admin Dashboard */
    .admin-dashboard {
        padding: 2rem;
        max-width: 1400px;
        margin: 2rem auto;
        background: #fff;
        border-radius: 8px;
    }
    .admin-dashboard h1 {
        font-size: 2.2rem;
        border-bottom: 1px solid #ddd;
        padding-bottom: 1rem;
        margin-bottom: 1.5rem;
    }
    .admin-section {
        margin-bottom: 3rem;
    }
    .admin-table {
        width: 100%;
        border-collapse: collapse;
    }
    .admin-table th, .admin-table td {
        border: 1px solid #ddd;
        padding: 0.75rem;
        text-align: left;
    }
    .admin-table th {
        background-color: #f7f7f7;
    }
    .admin-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        margin-top: 1.5rem;
        padding: 1.5rem;
        border: 1px solid #ddd;
        border-radius: 8px;
    }
    .admin-form-group {
        display: flex;
        flex-direction: column;
    }
    .admin-form-group label {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }
    .admin-form-group input {
        padding: 0.5rem;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
  `}</style>
);

export default GlobalStyles;
