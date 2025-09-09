import React from 'react';

const deals = [
  { title: 'HDFC Platinum Debit Card', offer: '30%–40% off' },
  { title: 'ICICI Amazon Pay Credit Card', offer: '5% cashback' },
  { title: 'SBI SimplyCLICK Credit Card', offer: '10X rewards on online spends' },
  { title: 'Axis Bank Magnus Credit Card', offer: 'Unlimited lounge access' },
  { title: 'Flipkart Axis Bank Credit Card', offer: '5% cashback on Flipkart' },
  { title: 'Amazon Pay ICICI Bank Credit Card', offer: '5% cashback for Prime members' },
  { title: 'Standard Chartered DigiSmart Credit Card', offer: '20% off on Myntra' },
  { title: 'HSBC Cashback Credit Card', offer: '1.5% cashback on all online spends' },
  { title: 'Yes First Preferred Credit Card', offer: 'BookMyShow BOGO offer' },
  { title: 'IndusInd Bank Legend Credit Card', offer: 'Weekend BOGO on movie tickets' },
];

const Deals = () => {
  return (
    <div style={styles.container}>
      <style>{`
        .feature-card:hover {
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }

        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <h1 style={styles.title}>Today's Deals</h1>
      <p style={styles.description}>Check out the latest deals on electronics, fashion, home goods, and more. These offers are for a limited time only, so grab them while you can!</p>
      <div style={styles.featureGrid} className="feature-grid">
        {deals.map((deal, index) => (
          <div key={index} style={styles.featureCard} className="feature-card">
            <h3 style={styles.featureCardTitle}>{deal.title}</h3>
            <p style={styles.featureCardText}>{deal.offer}</p>
          </div>
        ))}
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
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
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

export default Deals;