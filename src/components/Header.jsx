import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'white',
      borderBottom: '1px solid #e2e8f0',
      padding: '16px 0',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#667eea',
          textDecoration: 'none'
        }}>
          FamilyForward
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {user ? (
            <>
              <Link to="/dashboard" style={{
                textDecoration: 'none',
                color: '#64748b',
                fontWeight: '600'
              }}>
                Dashboard
              </Link>
              <span style={{ color: '#64748b' }}>Welcome, {user.name}</span>
              <button 
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{
                textDecoration: 'none',
                color: '#64748b',
                fontWeight: '600'
              }}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary">
                Get Started
              </Link>
            </>
          )}
          <ConnectButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;