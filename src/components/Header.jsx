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
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--gray-200)',
      padding: 'var(--space-4) 0',
      zIndex: 'var(--z-fixed)',
      transition: 'all var(--transition-fast)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          fontSize: 'var(--font-size-2xl)',
          fontWeight: 'var(--font-weight-bold)',
          color: 'var(--primary-600)',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            F
          </div>
          FamilyForward
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}>
          {user ? (
            <>
              <Link to="/dashboard" style={{
                textDecoration: 'none',
                color: 'var(--gray-600)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-md)'
              }}>
                Dashboard
              </Link>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)',
                padding: 'var(--space-2) var(--space-4)',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--gray-200)'
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--secondary-500) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'var(--font-weight-bold)'
                }}>
                  {user.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <span style={{ 
                  color: 'var(--gray-700)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)'
                }}>
                  {user.name}
                </span>
                <button 
                  onClick={handleLogout}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--gray-500)',
                    fontWeight: 'var(--font-weight-medium)',
                    cursor: 'pointer',
                    fontSize: 'var(--font-size-sm)',
                    padding: 'var(--space-1)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'color var(--transition-fast)'
                  }}
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/login" style={{
                textDecoration: 'none',
                color: 'var(--gray-600)',
                fontWeight: 'var(--font-weight-semibold)',
                fontSize: 'var(--font-size-base)',
                transition: 'color var(--transition-fast)',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-md)'
              }}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary" style={{
                fontSize: 'var(--font-size-sm)',
                padding: 'var(--space-2) var(--space-4)'
              }}>
                Get Started
              </Link>
            </>
          )}
          <div style={{ marginLeft: 'var(--space-2)' }}>
            <ConnectButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
