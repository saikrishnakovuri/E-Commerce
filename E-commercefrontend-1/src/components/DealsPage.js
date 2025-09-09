import React from 'react';

const DealsPage = () => (
    <div className="generic-page">
        <h1>Today's Deals</h1>
        <p>Check out the latest deals on electronics, fashion, home goods, and more. These offers are for a limited time only, so grab them while you can!</p>
        <div className="feature-grid">
            <div className="feature-card">
                <h3>Electronics Fest</h3>
                <p>Up to 40% off on smartphones, laptops, and accessories.</p>
            </div>
            <div className="feature-card">
                <h3>Fashion Frenzy</h3>
                <p>Get 60% off on all clothing and footwear.</p>
            </div>
            <div className="feature-card">
                <h3>Home & Kitchen</h3>
                <p>Discounts on appliances, decor, and more.</p>
            </div>
        </div>
    </div>
);

export default DealsPage;
