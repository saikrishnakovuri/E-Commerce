import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    address: '',
    password: '',
    reenterPassword: ''
  });
  const navigate = useNavigate();
  const { signup } = useStateContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.reenterPassword) {
      alert("Passwords do not match!");
      return;
    }
    await signup(formData);
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
            <input type="text" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
            <input type="text" name="address" placeholder="Address" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md col-span-1 md:col-span-2" required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
            <input type="password" name="reenterPassword" placeholder="Re-enter Password" onChange={handleChange} className="w-full px-3 py-2 mt-1 border rounded-md" required />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-500 rounded-md">Sign Up</button>
        </form>
        <div className="flex items-center justify-center space-x-4">
            <button className="bg-red-600 text-white py-2 px-4 rounded-md">Google</button>
            <button className="bg-blue-800 text-white py-2 px-4 rounded-md">LinkedIn</button>
            <button className="bg-gray-800 text-white py-2 px-4 rounded-md">GitHub</button>
        </div>
        <p className="text-sm text-center">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;