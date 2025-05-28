
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Home, Calendar, FileText, MessageSquare } from 'lucide-react';
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
const periods = ['1º Bimestre', '2º Bimestre', '3º Bimestre', '4º Bimestre'];
const evaluationTypes = ['Prova 1', 'Prova 2', 'Trabalho 1', 'Trabalho 2'];

const students = [
  { id: 1, name: 'Ana Silva', grades: { 'Prova 1': 8.5, 'Prova 2': 9.0, 'Trabalho 1': 8.0, 'Trabalho 2': 8.5 } },
  { id: 2, name: 'Bruno Santos', grades: { 'Prova 1': 7.0, 'Prova 2': 7.5, 'Trabalho 1': 8.0, 'Trabalho 2': 7.0 } },
  { id: 3, name: 'Carla Oliveira', grades: { 'Prova 1': 9.0, 'Prova 2': 8.5, 'Trabalho 1': 9.0, 'Trabalho 2': 9.5 } },
  { id: 4, name: 'Daniel Lima', grades: { 'Prova 1': 6.5, 'Prova 2': 7.0, 'Trabalho 1': 7.5, 'Trabalho 2': 8.0 } },
  { id: 5, name: 'Eduardo Costa', grades: { 'Prova 1': 8.0, 'Prova 2': 8.0, 'Trabalho 1': 7.5, 'Trabalho 2': 8.0 } },
  { id: 6, name: 'Flávia Souza', grades: { 'Prova 1': 9.5, 'Prova 2': 9.0, 'Trabalho 1': 9.5, 'Trabalho 2': 9.0 } },
  { id: 7, name: 'Gabriel Ferreira', grades: { 'Prova 1': 7.0, 'Prova 2': 7.5, 'Trabalho 1': 8.0, 'Trabalho 2': 7.5 } },
  { id: 8, name: 'Helena Martins', grades: { 'Prova 1': 8.5, 'Prova 2': 8.0, 'Trabalho 1': 8.0, 'Trabalho 2': 8.5 } },
];

const TeacherGrades = () => {
  const [selectedClass, setSelectedClass] = useState('9º A');
  const [selectedSubject, setSelectedSubject] = useState('Matemática');
  const [selectedPeriod, setSelectedPeriod] = useState('3º Bimestre');
  const [selectedEvaluation, setSelectedEvaluation] = useState('Prova 1');
  const [studentGrades, setStudentGrades] = useState(students);
  const [isSaving, setIsSaving] = useState(false);

  const handleGradeChange = (studentId: number, value: string) => {
    const numValue = value === '' ? '' : parseFloat(value);
    
    setStudentGrades(studentGrades.map(student => {
      if (student.id === studentId) {
        return { 
          ...student, 
          grades: { 
            ...student.grades, 
            [selectedEvaluation]: numValue 
          } 
        };
      }
      return student;
    }));
  };

  const calculateAverage = (studentId: number) => {
    const student = studentGrades.find(s => s.id === studentId);
    if (!student) return 0;
    
    const grades = Object.values(student.grades);
    if (grades.length === 0) return 0;
    
    const validGrades = grades.filter(grade => typeof grade === 'number');
    if (validGrades.length === 0) return 0;
    
    return validGrades.reduce((sum, grade) => sum + grade, 0) / validGrades.length;
  };

  const handleSave = () => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      alert('Notas salvas com sucesso!');
    }, 1000);
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Lançamento de Notas</h1>
        <p className="text-gray-600">Registre as notas dos alunos</p>
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
          <label htmlFor="period" className="block text-sm font-medium text-gray-700 mb-1">Período</label>
          <select
            id="period"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            {periods.map((period) => (
              <option key={period} value={period}>{period}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="evaluation" className="block text-sm font-medium text-gray-700 mb-1">Avaliação</label>
          <select
            id="evaluation"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            value={selectedEvaluation}
            onChange={(e) => setSelectedEvaluation(e.target.value)}
          >
            {evaluationTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <Card title={`Notas - ${selectedClass} - ${selectedSubject} - ${selectedPeriod} - ${selectedEvaluation}`} className="mb-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aluno
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nota
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Média Atual
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {studentGrades.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{student.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap w-40">
                    <input
                      type="number"
                      min="0"
                      max="10"
                      step="0.1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      value={student.grades[selectedEvaluation as keyof typeof student.grades] || ''}
                      onChange={(e) => handleGradeChange(student.id, e.target.value)}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium">{calculateAverage(student.id).toFixed(1)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button onClick={handleSave} isLoading={isSaving} className="gap-2">
          Salvar Notas
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default TeacherGrades;
