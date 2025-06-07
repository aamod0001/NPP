'use client'; // ⬅️ Required for using useState, useEffect, etc.

import React, { useState } from 'react';
import './app.css'; // adjust if you place your CSS elsewhere

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email === 'user@example.com' && password === 'password123') {
      setLoggedIn(true);
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <h2>Welcome, {email}!</h2>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

