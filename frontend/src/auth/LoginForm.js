import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const success = await login(email, password);
    if (!success) setError('Invalid credentials');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} type="email" required />
      <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" required />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
}