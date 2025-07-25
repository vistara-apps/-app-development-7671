import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('familyforward_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - in a real app, this would call an API
    if (email && password) {
      const mockUser = {
        id: 1,
        name: 'John Smith',
        email,
        role: 'heir',
        familyBusinessRole: 'Operations Manager'
      };
      setUser(mockUser);
      localStorage.setItem('familyforward_user', JSON.stringify(mockUser));
      return true;
    }
    throw new Error('Invalid credentials');
  };

  const register = async (userData) => {
    // Mock registration - in a real app, this would call an API
    const mockUser = {
      id: Date.now(),
      ...userData
    };
    setUser(mockUser);
    localStorage.setItem('familyforward_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('familyforward_user');
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};