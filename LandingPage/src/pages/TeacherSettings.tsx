
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Calendar, FileText, Home, MessageSquare, Settings, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const navItems = [
  { title: 'Dashboard', path: '/teacher-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/teacher-dashboard/schedule', icon: Calendar },
  { title: 'Diário de Classe', path: '/teacher-dashboard/diary', icon: FileText },
  { title: 'Notas', path: '/teacher-dashboard/grades', icon: FileText },
  { title: 'Mensagens', path: '/teacher-dashboard/messages', icon: MessageSquare },
  { title: 'Configurações', path: '/teacher-dashboard/settings', icon: Settings },
];

const TeacherSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [profileSettings, setProfileSettings] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '(11) 98765-4321',
    profilePicture: '',
  });
  
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    gradeReminders: true,
    attendanceReminders: true,
    systemUpdates: false,
  });
  
  const [themeSettings, setThemeSettings] = useState({
    darkMode: false,
    highContrast: false,
    fontSize: 'medium',
  });
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileSettings(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const handleThemeToggle = (setting) => {
    setThemeSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };
  
  const handleSaveSettings = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram atualizadas com sucesso.",
    });
  };
  
  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
        <p className="text-gray-600">Gerencie seu perfil e preferências do sistema</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card title="Perfil">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={profileSettings.name}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profileSettings.email}
                  onChange={handleProfileChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={profileSettings.phone}
                  onChange={handleProfileChange}
                />
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Notificações">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-notifications">Notificações por e-mail</Label>
                <p className="text-sm text-gray-500">Receba atualizações do sistema por e-mail</p>
              </div>
              <Switch
                id="email-notifications"
                checked={notificationSettings.emailNotifications}
                onCheckedChange={() => handleNotificationToggle('emailNotifications')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="push-notifications">Notificações push</Label>
                <p className="text-sm text-gray-500">Receba notificações no navegador</p>
              </div>
              <Switch
                id="push-notifications"
                checked={notificationSettings.pushNotifications}
                onCheckedChange={() => handleNotificationToggle('pushNotifications')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="grade-reminders">Lembretes de notas</Label>
                <p className="text-sm text-gray-500">Lembretes para lançamento de notas</p>
              </div>
              <Switch
                id="grade-reminders"
                checked={notificationSettings.gradeReminders}
                onCheckedChange={() => handleNotificationToggle('gradeReminders')}
              />
            </div>
          </div>
        </Card>
        
        <Card title="Aparência">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Modo escuro</Label>
                <p className="text-sm text-gray-500">Ative o tema escuro para o sistema</p>
              </div>
              <Switch
                id="dark-mode"
                checked={themeSettings.darkMode}
                onCheckedChange={() => handleThemeToggle('darkMode')}
              />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="high-contrast">Alto contraste</Label>
                <p className="text-sm text-gray-500">Aumente o contraste para melhor visibilidade</p>
              </div>
              <Switch
                id="high-contrast"
                checked={themeSettings.highContrast}
                onCheckedChange={() => handleThemeToggle('highContrast')}
              />
            </div>
          </div>
        </Card>
        
        <div className="flex justify-end space-x-4">
          <Button variant="outline">Cancelar</Button>
          <Button onClick={handleSaveSettings}>Salvar configurações</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherSettings;
