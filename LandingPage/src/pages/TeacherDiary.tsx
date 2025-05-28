
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Home, Calendar, FileText, MessageSquare, User, Check, X } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const navItems = [
  { title: 'Dashboard', path: '/teacher-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/teacher-dashboard/schedule', icon: Calendar },
  { title: 'Diário de Classe', path: '/teacher-dashboard/diary', icon: FileText },
  { title: 'Notas', path: '/teacher-dashboard/grades', icon: FileText },
  { title: 'Mensagens', path: '/teacher-dashboard/messages', icon: MessageSquare },
];

// Sample data
const classes = ['9º A', '8º B', '7º C', '6º D'];
const subjects = ['Matemática'];
const today = new Date().toISOString().split('T')[0];

const students = [
  { id: 1, name: 'Ana Silva', present: true },
  { id: 2, name: 'Bruno Santos', present: true },
  { id: 3, name: 'Carla Oliveira', present: false },
  { id: 4, name: 'Daniel Lima', present: true },
  { id: 5, name: 'Eduardo Costa', present: true },
  { id: 6, name: 'Flávia Souza', present: true },
  { id: 7, name: 'Gabriel Ferreira', present: true },
  { id: 8, name: 'Helena Martins', present: false },
  { id: 9, name: 'Igor Alves', present: true },
  { id: 10, name: 'Juliana Ribeiro', present: true },
];

const TeacherDiary = () => {
  const [selectedClass, setSelectedClass] = useState('9º A');
  const [selectedSubject, setSelectedSubject] = useState('Matemática');
  const [selectedDate, setSelectedDate] = useState(today);
  const [lessonContent, setLessonContent] = useState('Revisão para a prova: equações do segundo grau, fórmula de Bhaskara e problemas de aplicação.');
  const [attendance, setAttendance] = useState(students);
  const [isSaving, setIsSaving] = useState(false);

  const handleAttendanceChange = (studentId: number, present: boolean) => {
    setAttendance(attendance.map(student => 
      student.id === studentId ? { ...student, present } : student
    ));
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Diário salvo com sucesso!');
    }, 1000);
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Diário de Classe</h1>
        <p className="text-gray-600">Registre presença e conteúdo das aulas</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div>
          <label htmlFor="class" className="block text-sm font-medium text-gray-700 mb-1">Turma</label>
          <select
            id="class"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classes.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Disciplina</label>
          <select
            id="subject"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            {subjects.map((subject) => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Data</label>
          <input
            type="date"
            id="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card title="Conteúdo da Aula">
          <textarea
            className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
            value={lessonContent}
            onChange={(e) => setLessonContent(e.target.value)}
            placeholder="Descreva o conteúdo da aula..."
          />
        </Card>
      </div>

      <Card title="Registro de Presença" className="mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {attendance.map((student) => (
            <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
              <span>{student.name}</span>
              <div className="flex gap-2">
                <button
                  className={`p-2 rounded-full ${student.present ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => handleAttendanceChange(student.id, true)}
                >
                  <Check size={18} />
                </button>
                <button
                  className={`p-2 rounded-full ${!student.present ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'}`}
                  onClick={() => handleAttendanceChange(student.id, false)}
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} isLoading={isSaving} className="gap-2">
          Salvar Registro
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDiary;
