import React from 'react';

const faqs = [
  { q: 'How do I track my order?', a: 'You can track your order from the \'Your Orders\' page.' },
  { q: 'What is your return policy?', a: 'We offer a 30-day return policy on most items.' },
  { q: 'How do I cancel an order?', a: 'You can cancel your order from the \'Your Orders\' page if it has not yet shipped.' },
];

const CustomerService = () => {
  return (
    <div style={styles.container}>
      <style>{`
        .feature-card:hover {
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
          transform: translateY(-5px);
        }
      `}</style>
      <h1 style={styles.title}>Customer Service</h1>
      <p style={styles.description}>Welcome to our help center. We're here to assist you with any questions or issues you may have.</p>
      <h2 style={styles.subtitle}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.featureCard} className="feature-card">
          <h3 style={styles.featureCardTitle}>{faq.q}</h3>
          <p style={styles.featureCardText}>{faq.a}</p>
        </div>
      ))}
      <h2 style={styles.subtitle}>Contact Us</h2>
      <p style={styles.description}>If you can't find the answer you're looking for, feel free to reach out to our support team 24/7.</p>
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
  subtitle: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '0.5rem',
    color: '#333',
  },
  featureCard: {
    padding: '1.5rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    marginBottom: '1.5rem',
  },
  featureCardTitle: {
    marginTop: 0,
    color: '#333',
  },
  featureCardText: {
    color: '#555',
  },
};

export default CustomerService;