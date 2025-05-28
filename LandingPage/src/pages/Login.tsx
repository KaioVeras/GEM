
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import Button from '@/components/Button';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'student' | 'teacher'>('student');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      try {
        login(email, password, userType);
        
        toast({
          title: isLogin ? 'Login realizado' : 'Cadastro realizado',
          description: 'Bem-vindo ao GEM!',
        });
        
        if (userType === 'student') {
          navigate('/student-dashboard');
        } else {
          navigate('/teacher-dashboard');
        }
      } catch (error) {
        toast({
          title: 'Erro',
          description: 'Ocorreu um erro. Tente novamente.',
          variant: 'destructive',
        });
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo size="lg" className="mb-6" />
          <h1 className="text-2xl font-bold text-gray-900">
            {isLogin ? 'Acesse sua conta' : 'Criar conta'}
          </h1>
          <p className="text-gray-600 mt-2">
            Gerenciador Escolar Modular
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex border rounded-lg overflow-hidden mb-6">
            <button
              className={`flex-1 py-2 px-4 text-center transition-colors ${
                isLogin
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 px-4 text-center transition-colors ${
                !isLogin
                  ? 'bg-primary text-white'
                  : 'bg-transparent text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Cadastro
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder={isLogin ? '********' : 'Crie uma senha segura'}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Você é:
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      checked={userType === 'student'}
                      onChange={() => setUserType('student')}
                      className="w-4 h-4 text-primary"
                    />
                    <span>Aluno</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="userType"
                      checked={userType === 'teacher'}
                      onChange={() => setUserType('teacher')}
                      className="w-4 h-4 text-primary"
                    />
                    <span>Professor</span>
                  </label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full mt-6"
              isLoading={isLoading}
            >
              {isLogin ? 'Entrar' : 'Cadastrar'}
            </Button>

            {isLogin && (
              <p className="text-center text-sm text-gray-600 mt-4">
                <a href="#" className="text-primary hover:underline">
                  Esqueceu sua senha?
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
