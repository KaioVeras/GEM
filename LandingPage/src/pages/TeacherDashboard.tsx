
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, FileText, Home, MessageSquare, Settings, User } from 'lucide-react';
import Card from '@/components/Card';

const navItems = [
  { title: 'Dashboard', path: '/teacher-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/teacher-dashboard/schedule', icon: Calendar },
  { title: 'Diário de Classe', path: '/teacher-dashboard/diary', icon: FileText },
  { title: 'Notas', path: '/teacher-dashboard/grades', icon: FileText },
  { title: 'Mensagens', path: '/teacher-dashboard/messages', icon: MessageSquare },
  { title: 'Configurações', path: '/teacher-dashboard/settings', icon: Settings },
];

const TeacherDashboard = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Sample data
  const todayClasses = [
    { class: '9º A', subject: 'Matemática', time: '08:00 - 09:30', room: 'Sala 101', students: 28 },
    { class: '8º B', subject: 'Matemática', time: '10:00 - 11:30', room: 'Sala 103', students: 25 },
    { class: '7º C', subject: 'Matemática', time: '13:00 - 14:30', room: 'Sala 105', students: 26 },
  ];

  const alerts = [
    { id: 1, type: 'Notas Pendentes', class: '9º A', subject: 'Matemática', dueDate: '01/05/2025' },
    { id: 2, type: 'Faltas', class: '8º B', subject: 'Matemática', dueDate: 'Atualização necessária' },
    { id: 3, type: 'Planejamento', class: 'Todos', subject: 'Matemática', dueDate: '05/05/2025' },
  ];

  const classSummary = [
    { class: '9º A', avgGrade: 7.8, attendance: '95%', pending: 2 },
    { class: '8º B', avgGrade: 8.2, attendance: '92%', pending: 0 },
    { class: '7º C', avgGrade: 6.5, attendance: '88%', pending: 5 },
    { class: '6º D', avgGrade: 7.0, attendance: '90%', pending: 3 },
  ];

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard do Professor</h1>
        <p className="text-gray-600">{currentDate}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Today Classes */}
        <Card title="Turmas de Hoje" className="col-span-1 lg:col-span-2">
          <div className="space-y-3">
            {todayClasses.map((cls, index) => (
              <div key={index} className="flex flex-col p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm mr-3">
                      {cls.class}
                    </span>
                    <h4 className="font-medium">{cls.subject}</h4>
                  </div>
                  <span className="text-sm bg-primary-light/20 text-primary px-2 py-0.5 rounded-full">
                    {cls.time}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{cls.room}</span>
                  <span>{cls.students} alunos</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alerts */}
        <Card title="Alertas" className="col-span-1">
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-3 rounded-lg border border-red-100 bg-red-50">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-medium text-red-700">{alert.type}</h4>
                  <span className="bg-white text-red-700 border border-red-200 px-2 py-0.5 text-xs rounded-full">
                    {alert.class}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{alert.subject}</p>
                <p className="text-xs text-red-600 mt-1">Prazo: {alert.dueDate}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card title="Resumo das Turmas" className="col-span-1">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Turma
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Média de Notas
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Frequência
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Atividades Pendentes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {classSummary.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{item.class}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`font-medium ${
                        item.avgGrade >= 7 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.avgGrade.toFixed(1)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{item.attendance}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.pending > 0 ? (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                          {item.pending} pendentes
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          Em dia
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <button className="text-primary hover:text-primary-light">
                          Diário
                        </button>
                        <button className="text-primary hover:text-primary-light">
                          Notas
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card title="Próximas Atividades" className="col-span-1">
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div>
                <h4 className="font-medium">Prova Bimestral</h4>
                <p className="text-sm text-gray-600">9º A - Matemática</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                03/05/2025
              </span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div>
                <h4 className="font-medium">Entrega de Trabalho</h4>
                <p className="text-sm text-gray-600">8º B - Matemática</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                05/05/2025
              </span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
              <div>
                <h4 className="font-medium">Conselho de Classe</h4>
                <p className="text-sm text-gray-600">Todas as turmas</p>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                10/05/2025
              </span>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
