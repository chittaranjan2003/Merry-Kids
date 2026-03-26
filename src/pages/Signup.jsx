import { useState } from 'react';
import AnimatedButton from '../components/AnimatedButton';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', paddingTop: '120px', backgroundColor: '#0B0F19', color: '#FFFFFF' }}>
      <div style={{ borderRadius: '12px', padding: '2.5rem', width: '100%', maxWidth: '400px', backgroundColor: '#1a1f2e', border: '1px solid #2a3142' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem' }}>Join Merry Kids!</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid #2a3142', backgroundColor: '#0B0F19', color: '#FFFFFF', outline: 'none' }}
          onFocus={(e) => (e.target.style.borderColor = '#4a5568')}
          onBlur={(e) => (e.target.style.borderColor = '#2a3142')}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '1.5rem', borderRadius: '8px', border: '1px solid #2a3142', backgroundColor: '#0B0F19', color: '#FFFFFF', outline: 'none' }}
          onFocus={(e) => (e.target.style.borderColor = '#4a5568')}
          onBlur={(e) => (e.target.style.borderColor = '#2a3142')}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem', marginBottom: '2rem', borderRadius: '8px', border: '1px solid #2a3142', backgroundColor: '#0B0F19', color: '#FFFFFF', outline: 'none' }}
          onFocus={(e) => (e.target.style.borderColor = '#4a5568')}
          onBlur={(e) => (e.target.style.borderColor = '#2a3142')}
        />
        <AnimatedButton onClick={() => alert('Signed up!')} style={{ width: '100%', padding: '0.75rem 1rem', fontSize: '1rem' }} variant="secondary">
          Create Account
        </AnimatedButton>
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#9CA3AF' }}>
          Already have an account? <a href="/login" style={{ color: '#9CA3AF', textDecoration: 'none' }} className="hover:text-white">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;