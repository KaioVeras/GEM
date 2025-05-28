
import React, { createContext, useState, useContext, ReactNode } from 'react';

type UserType = 'student' | 'teacher' | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userType: UserType;
  login: (email: string, password: string, type: UserType) => void;
  logout: () => void;
  user: {
    name: string;
    email: string;
  } | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState<UserType>(null);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const login = (email: string, password: string, type: UserType) => {
    // In a real app, this would validate credentials with a backend
    setIsAuthenticated(true);
    setUserType(type);
    
    // Mock user data based on the type
    if (type === 'student') {
      setUser({ name: 'Aluno Exemplo', email });
    } else {
      setUser({ name: 'Professor Exemplo', email });
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserType(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userType, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
