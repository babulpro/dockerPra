"use client";
import React, { useState } from 'react';

const Page = () => {
  const [user, setUser] = useState({ name: "", email: "",password:"", role:"",mobile:""});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error('Registration failed');
      alert('Success!');
      setUser({ name: "", email: "",mobile:"",password:""}); // Reset form
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900'>
      <h1 className='text-2xl font-bold mb-4'>Registration</h1>
      <form className='flex flex-col space-y-4 w-64'>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className='p-2 rounded bg-gray-800 text-white'
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          className='p-2 rounded bg-gray-800 text-white'
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          className='p-2 rounded bg-gray-800 text-white'
          placeholder="Password"
        />
        <input
          type="text"
          name="mobile"
          value={user.mobile}
          onChange={handleChange}
          className='p-2 rounded bg-gray-800 text-white'
          placeholder="mobile"
        />
        <button
          onClick={handleSubmit}
          disabled={!user.name || !user.email || loading}
          className={`p-2 bg-blue-600 rounded hover:bg-blue-700 ${
            loading ? 'opacity-50' : ''
          }`}
        >
          {loading ? 'Processing...' : 'Register'}
        </button>
        {error && <p className='text-red-500'>{error}</p>}
      </form>
    </div>
  );
};

export default Page;