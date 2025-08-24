import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function SignupForm() {
  const { signup } = useContext(AuthContext);
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const success = await signup(form);
    setMessage(success ? 'Signup successful!' : 'Signup failed');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
      <input name="password" placeholder="Password" value={form.password} onChange={handleChange} type="password" required />
      <button type="submit">Sign Up</button>
      {message && <div>{message}</div>}
    </form>
  );
}