
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import Card from '@/components/Card';
import { Calendar, Clock, FileText, Home, MessageSquare, Settings, User } from 'lucide-react';

const navItems = [
  { title: 'Dashboard', path: '/teacher-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/teacher-dashboard/schedule', icon: Calendar },
  { title: 'Diário de Classe', path: '/teacher-dashboard/diary', icon: FileText },
  { title: 'Notas', path: '/teacher-dashboard/grades', icon: FileText },
  { title: 'Mensagens', path: '/teacher-dashboard/messages', icon: MessageSquare },
  { title: 'Configurações', path: '/teacher-dashboard/settings', icon: Settings },
];

const TeacherSchedule = () => {
  const daysOfWeek = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'];
  const timeSlots = ['08:00 - 09:30', '09:45 - 11:15', '11:30 - 13:00', '14:00 - 15:30', '15:45 - 17:15'];
  
  // Sample data for teacher's schedule
  const scheduleData = {
    'Segunda-feira': {
      '08:00 - 09:30': { class: '9º A', subject: 'Matemática', room: 'Sala 101' },
      '11:30 - 13:00': { class: '7º C', subject: 'Matemática', room: 'Sala 105' },
      '15:45 - 17:15': { class: '8º D', subject: 'Matemática', room: 'Sala 102' },
    },
    'Terça-feira': {
      '09:45 - 11:15': { class: '8º B', subject: 'Matemática', room: 'Sala 103' },
      '14:00 - 15:30': { class: '6º F', subject: 'Matemática', room: 'Sala 106' },
    },
    'Quarta-feira': {
      '08:00 - 09:30': { class: '7º C', subject: 'Matemática', room: 'Sala 105' },
      '11:30 - 13:00': { class: '9º A', subject: 'Matemática', room: 'Sala 101' },
    },
    'Quinta-feira': {
      '09:45 - 11:15': { class: '8º D', subject: 'Matemática', room: 'Sala 102' },
      '14:00 - 15:30': { class: '8º B', subject: 'Matemática', room: 'Sala 103' },
    },
    'Sexta-feira': {
      '08:00 - 09:30': { class: '6º F', subject: 'Matemática', room: 'Sala 106' },
      '15:45 - 17:15': { class: '9º A', subject: 'Matemática', room: 'Sala 101' },
    },
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Grade de Aulas</h1>
        <p className="text-gray-600">Visualize sua grade semanal de aulas</p>
      </div>

      <Card className="w-full overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24">
                  Horário
                </th>
                {daysOfWeek.map((day) => (
                  <th 
                    key={day} 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {timeSlots.map((timeSlot) => (
                <tr key={timeSlot} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-400" />
                      <span className="text-sm text-gray-900 font-medium">{timeSlot}</span>
                    </div>
                  </td>
                  {daysOfWeek.map((day) => {
                    const cellData = scheduleData[day]?.[timeSlot];
                    return (
                      <td key={`${day}-${timeSlot}`} className="px-6 py-4 whitespace-nowrap">
                        {cellData ? (
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <div className="font-medium text-primary">{cellData.class}</div>
                            <div className="text-sm text-gray-600">{cellData.subject}</div>
                            <div className="text-sm text-gray-500">{cellData.room}</div>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-400">-</div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default TeacherSchedule;
