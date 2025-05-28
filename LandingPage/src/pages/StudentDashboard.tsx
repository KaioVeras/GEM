
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, FileText, Home, MessageSquare, Bell, Settings } from 'lucide-react';
import Card from '@/components/Card';

const navItems = [
  { title: 'Dashboard', path: '/student-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/student-dashboard/schedule', icon: Calendar },
  { title: 'Notas', path: '/student-dashboard/grades', icon: FileText },
  { title: 'Documentos', path: '/student-dashboard/documents', icon: FileText },
  { title: 'Mensagens', path: '/student-dashboard/messages', icon: MessageSquare },
  { title: 'Configurações', path: '/student-dashboard/settings', icon: Settings },
];

const StudentDashboard = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Sample data
  const recentGrades = [
    { subject: 'Matemática', grade: 8.5, date: '22/04/2025' },
    { subject: 'História', grade: 9.0, date: '20/04/2025' },
    { subject: 'Biologia', grade: 7.5, date: '18/04/2025' },
  ];

  const todayClasses = [
    { subject: 'Matemática', time: '08:00 - 09:30', room: 'Sala 101' },
    { subject: 'História', time: '10:00 - 11:30', room: 'Sala 103' },
    { subject: 'Educação Física', time: '13:00 - 14:30', room: 'Quadra' },
  ];

  const notifications = [
    { id: 1, title: 'Trabalho de Biologia', message: 'Entrega do relatório amanhã', date: '30/04/2025' },
    { id: 2, title: 'Prova de Matemática', message: 'Agendada para sexta-feira', date: '29/04/2025' },
    { id: 3, title: 'Reunião de Pais', message: 'Próximo sábado às 9h', date: '28/04/2025' },
  ];

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard do Aluno</h1>
        <p className="text-gray-600">{currentDate}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Grades */}
        <Card title="Notas Recentes" className="col-span-1">
          <div className="divide-y">
            {recentGrades.map((grade, index) => (
              <div key={index} className="py-2 flex justify-between items-center">
                <div>
                  <p className="font-medium">{grade.subject}</p>
                  <p className="text-sm text-gray-500">{grade.date}</p>
                </div>
                <div className="text-lg font-semibold">
                  {grade.grade.toFixed(1)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Today Classes */}
        <Card title="Próximas Aulas" className="col-span-1">
          <div className="space-y-3">
            {todayClasses.map((cls, index) => (
              <div key={index} className="flex flex-col p-2 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium">{cls.subject}</h4>
                  <span className="text-sm bg-primary-light/20 text-primary px-2 py-0.5 rounded-full">
                    {cls.time}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{cls.room}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Notifications */}
        <Card title="Notificações" className="col-span-1">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex gap-3 p-2 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="mt-0.5">
                  <Bell size={16} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">{notification.title}</h4>
                  <p className="text-sm text-gray-600">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Atividades Pendentes" className="col-span-1">
          <div className="space-y-2">
            <div className="flex justify-between items-center p-2 bg-yellow-50 rounded-lg">
              <div>
                <h4 className="font-medium">Trabalho de Biologia</h4>
                <p className="text-sm text-gray-600">Entrega: 01/05/2025</p>
              </div>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pendente</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-red-50 rounded-lg">
              <div>
                <h4 className="font-medium">Exercício de Matemática</h4>
                <p className="text-sm text-gray-600">Entrega: 28/04/2025</p>
              </div>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">Atrasado</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-green-50 rounded-lg">
              <div>
                <h4 className="font-medium">Redação de Português</h4>
                <p className="text-sm text-gray-600">Entrega: 25/04/2025</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Concluído</span>
            </div>
          </div>
        </Card>
        
        <Card title="Desempenho Geral" className="col-span-1">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between mb-1">
                <span>Matemática</span>
                <span>8.5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Português</span>
                <span>7.8</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '78%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>História</span>
                <span>9.0</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Biologia</span>
                <span>7.5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
