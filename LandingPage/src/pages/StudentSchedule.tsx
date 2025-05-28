
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, FileText, Home, MessageSquare } from 'lucide-react';
import Card from '@/components/Card';

const navItems = [
  { title: 'Dashboard', path: '/student-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/student-dashboard/schedule', icon: Calendar },
  { title: 'Notas', path: '/student-dashboard/grades', icon: FileText },
  { title: 'Documentos', path: '/student-dashboard/documents', icon: FileText },
  { title: 'Mensagens', path: '/student-dashboard/messages', icon: MessageSquare },
];

const weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
const timeSlots = ['08:00 - 09:30', '09:45 - 11:15', '11:30 - 13:00', '14:00 - 15:30', '15:45 - 17:15'];

// Sample schedule data
const scheduleData = {
  'Segunda': {
    '08:00 - 09:30': { subject: 'Matemática', teacher: 'Prof. Silva', room: 'Sala 101' },
    '09:45 - 11:15': { subject: 'Português', teacher: 'Prof. Oliveira', room: 'Sala 102' },
    '11:30 - 13:00': { subject: 'Ciências', teacher: 'Prof. Santos', room: 'Lab 01' },
    '14:00 - 15:30': { subject: 'História', teacher: 'Prof. Lima', room: 'Sala 103' },
    '15:45 - 17:15': { subject: 'Geografia', teacher: 'Prof. Rocha', room: 'Sala 104' },
  },
  'Terça': {
    '08:00 - 09:30': { subject: 'Educação Física', teacher: 'Prof. Costa', room: 'Quadra' },
    '09:45 - 11:15': { subject: 'Inglês', teacher: 'Prof. Souza', room: 'Sala 105' },
    '11:30 - 13:00': { subject: 'Matemática', teacher: 'Prof. Silva', room: 'Sala 101' },
    '14:00 - 15:30': { subject: 'Artes', teacher: 'Prof. Ferreira', room: 'Sala 106' },
    '15:45 - 17:15': { subject: 'Português', teacher: 'Prof. Oliveira', room: 'Sala 102' },
  },
  'Quarta': {
    '08:00 - 09:30': { subject: 'História', teacher: 'Prof. Lima', room: 'Sala 103' },
    '09:45 - 11:15': { subject: 'Geografia', teacher: 'Prof. Rocha', room: 'Sala 104' },
    '11:30 - 13:00': { subject: 'Ciências', teacher: 'Prof. Santos', room: 'Lab 01' },
    '14:00 - 15:30': { subject: 'Matemática', teacher: 'Prof. Silva', room: 'Sala 101' },
    '15:45 - 17:15': { subject: 'Português', teacher: 'Prof. Oliveira', room: 'Sala 102' },
  },
  'Quinta': {
    '08:00 - 09:30': { subject: 'Português', teacher: 'Prof. Oliveira', room: 'Sala 102' },
    '09:45 - 11:15': { subject: 'Matemática', teacher: 'Prof. Silva', room: 'Sala 101' },
    '11:30 - 13:00': { subject: 'Inglês', teacher: 'Prof. Souza', room: 'Sala 105' },
    '14:00 - 15:30': { subject: 'Ciências', teacher: 'Prof. Santos', room: 'Lab 01' },
    '15:45 - 17:15': { subject: 'Educação Física', teacher: 'Prof. Costa', room: 'Quadra' },
  },
  'Sexta': {
    '08:00 - 09:30': { subject: 'Geografia', teacher: 'Prof. Rocha', room: 'Sala 104' },
    '09:45 - 11:15': { subject: 'História', teacher: 'Prof. Lima', room: 'Sala 103' },
    '11:30 - 13:00': { subject: 'Artes', teacher: 'Prof. Ferreira', room: 'Sala 106' },
    '14:00 - 15:30': { subject: 'Português', teacher: 'Prof. Oliveira', room: 'Sala 102' },
    '15:45 - 17:15': { subject: 'Matemática', teacher: 'Prof. Silva', room: 'Sala 101' },
  },
};

const StudentSchedule = () => {
  const [selectedDay, setSelectedDay] = useState('Segunda');

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Grade de Aulas</h1>
        <p className="text-gray-600">Veja sua grade semanal de aulas</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {weekdays.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedDay === day
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-4">{selectedDay}</h2>
        <div className="overflow-hidden rounded-lg border border-gray-100">
          {timeSlots.map((timeSlot, index) => {
            const classInfo = scheduleData[selectedDay as keyof typeof scheduleData]?.[timeSlot];
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row p-4 ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } ${index !== timeSlots.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="md:w-1/6 font-medium text-gray-900 mb-2 md:mb-0">
                  {timeSlot}
                </div>
                
                {classInfo ? (
                  <div className="md:w-5/6 md:pl-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-primary">{classInfo.subject}</h3>
                        <p className="text-sm text-gray-600">{classInfo.teacher}</p>
                      </div>
                      <div className="mt-2 md:mt-0 md:ml-4">
                        <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                          {classInfo.room}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="md:w-5/6 md:pl-4 italic text-gray-500">
                    Horário livre
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default StudentSchedule;
