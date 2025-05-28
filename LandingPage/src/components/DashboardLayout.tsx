
import React, { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bell, Calendar, FileText, Home, LogOut, Menu, MessageSquare, User, X } from 'lucide-react';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  path: string;
  icon: React.ElementType;
}

interface DashboardLayoutProps {
  children: ReactNode;
  navItems: NavItem[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, navItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Get current year for footer
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Mobile Header */}
      <header className="bg-white shadow-sm py-4 px-4 flex items-center justify-between lg:hidden">
        <Logo />
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-gray-500 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-md"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "bg-white shadow-md z-30 transition-all duration-300",
            "fixed inset-y-0 left-0 transform lg:relative",
            "lg:translate-x-0",
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
            "w-64 flex flex-col"
          )}
        >
          <div className="p-4 border-b hidden lg:block">
            <Logo />
          </div>
          
          <div className="flex flex-col justify-between flex-1 overflow-y-auto">
            <nav className="px-3 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-2 text-base rounded-lg transition-colors",
                    location.pathname === item.path
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.title}
                </Link>
              ))}
            </nav>
            
            <div className="p-4 border-t">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User size={20} className="text-primary" />
                </div>
                <div className="ml-3 truncate">
                  <div className="text-sm font-medium">{user?.name}</div>
                  <div className="text-xs text-gray-500 truncate">{user?.email}</div>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <LogOut size={18} className="mr-3" />
                Sair
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto flex flex-col">
          <div className="max-w-7xl mx-auto px-4 py-6 w-full flex-1">
            {children}
          </div>
          
          {/* Footer */}
          <footer className="bg-white border-t border-gray-200 py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-2 md:mb-0">
                <Logo size="sm" />
                <span className="ml-2 text-sm text-gray-600">© {currentYear} GEM - Sistema Escolar</span>
              </div>
              <div className="flex space-x-4">
                <Link to="#" className="text-sm text-gray-600 hover:text-primary">Termos de uso</Link>
                <Link to="#" className="text-sm text-gray-600 hover:text-primary">Privacidade</Link>
                <Link to="#" className="text-sm text-gray-600 hover:text-primary">Suporte</Link>
              </div>
            </div>
          </footer>
        </main>
      </div>
      
      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
