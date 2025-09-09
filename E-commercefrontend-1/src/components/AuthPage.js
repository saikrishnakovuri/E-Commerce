import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => (
    <div className="account-page">
        <h1>Your Account</h1>
        <div className="account-grid">
            <Link to="/orders" className="account-card">
                <div className="account-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                </div>
                <div>
                    <h3 className="account-card-title">Your Orders</h3>
                    <p className="account-card-description">Track, return, or buy things again</p>
                </div>
            </Link>
            <Link to="/auth" className="account-card">
                <div className="account-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
                <div>
                    <h3 className="account-card-title">Login & Security</h3>
                    <p className="account-card-description">Edit login, name, and mobile number</p>
                </div>
            </Link>
            <Link to="/auth" className="account-card">
                <div className="account-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                    <h3 className="account-card-title">Your Addresses</h3>
                    <p className="account-card-description">Edit addresses for orders and gifts</p>
                </div>
            </Link>
            <Link to="/auth" className="account-card">
                <div className="account-card-icon">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                </div>
                <div>
                    <h3 className="account-card-title">Payment Options</h3>
                    <p className="account-card-description">Edit or add payment methods</p>
                </div>
            </Link>
             <Link to="/auth" className="account-card">
                <div className="account-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>
                <div>
                    <h3 className="account-card-title">Contact Us</h3>
                    <p className="account-card-description">Get help with your account and orders</p>
                </div>
            </Link>
        </div>
    </div>
);

export default AuthPage;
