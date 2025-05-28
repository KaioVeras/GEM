
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import { Calendar, FileText, Home, MessageSquare, Settings, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const navItems = [
  { title: 'Dashboard', path: '/student-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/student-dashboard/schedule', icon: Calendar },
  { title: 'Notas', path: '/student-dashboard/grades', icon: FileText },
  { title: 'Documentos', path: '/student-dashboard/documents', icon: FileText },
  { title: 'Mensagens', path: '/student-dashboard/messages', icon: MessageSquare },
  { title: 'Configurações', path: '/student-dashboard/settings', icon: Settings },
];

const StudentSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram atualizadas com sucesso.",
    });
  };

  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Preferências salvas",
      description: "Suas preferências de notificações foram atualizadas.",
    });
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600">Gerencie seu perfil e preferências</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-1">
          <Card className="h-full">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
                <User size={64} className="text-gray-400" />
              </div>
              <h3 className="font-medium text-lg">{user?.name}</h3>
              <p className="text-gray-500 mb-4">{user?.email}</p>
              <Button variant="outline" size="sm" className="mt-2">
                Alterar foto
              </Button>
            </div>
          </Card>
        </div>
        
        <div className="col-span-1 lg:col-span-2">
          <Card title="Informações Pessoais" className="mb-6">
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input id="name" defaultValue={user?.name || ''} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" defaultValue={user?.email || ''} readOnly className="bg-gray-100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthday">Data de nascimento</Label>
                  <Input id="birthday" type="date" />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary text-white">
                  Salvar alterações
                </Button>
              </div>
            </form>
          </Card>
          
          <Card title="Preferências de Notificações">
            <form onSubmit={handleSaveNotifications} className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações por e-mail</h4>
                    <p className="text-sm text-gray-500">Receba e-mails sobre atualizações e avisos</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações de novas notas</h4>
                    <p className="text-sm text-gray-500">Seja notificado quando novas notas forem lançadas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Lembretes de tarefas</h4>
                    <p className="text-sm text-gray-500">Receba lembretes sobre tarefas e prazos</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Mensagens</h4>
                    <p className="text-sm text-gray-500">Notificações sobre novas mensagens</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary text-white">
                  Salvar preferências
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentSettings;
