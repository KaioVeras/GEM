
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

const periods = ['1º Bimestre', '2º Bimestre', '3º Bimestre', '4º Bimestre'];

// Sample grades data
const gradesData = {
  '1º Bimestre': [
    { subject: 'Matemática', grade: 8.5, status: 'Aprovado', tests: [9.0, 8.0], assignments: [8.5, 8.5] },
    { subject: 'Português', grade: 7.0, status: 'Aprovado', tests: [7.0, 7.0], assignments: [7.5, 6.5] },
    { subject: 'História', grade: 8.0, status: 'Aprovado', tests: [8.5, 7.5], assignments: [8.0, 8.0] },
    { subject: 'Geografia', grade: 7.5, status: 'Aprovado', tests: [7.0, 8.0], assignments: [7.5, 7.5] },
    { subject: 'Ciências', grade: 9.0, status: 'Aprovado', tests: [9.0, 9.0], assignments: [9.0, 9.0] },
    { subject: 'Inglês', grade: 8.0, status: 'Aprovado', tests: [8.0, 8.0], assignments: [8.0, 8.0] },
    { subject: 'Educação Física', grade: 10.0, status: 'Aprovado', tests: [10.0, 10.0], assignments: [10.0, 10.0] },
    { subject: 'Artes', grade: 9.0, status: 'Aprovado', tests: [9.0, 9.0], assignments: [9.0, 9.0] },
  ],
  '2º Bimestre': [
    { subject: 'Matemática', grade: 7.5, status: 'Aprovado', tests: [7.0, 8.0], assignments: [7.5, 7.5] },
    { subject: 'Português', grade: 8.0, status: 'Aprovado', tests: [8.0, 8.0], assignments: [8.0, 8.0] },
    { subject: 'História', grade: 7.0, status: 'Aprovado', tests: [7.0, 7.0], assignments: [7.0, 7.0] },
    { subject: 'Geografia', grade: 8.0, status: 'Aprovado', tests: [8.0, 8.0], assignments: [8.0, 8.0] },
    { subject: 'Ciências', grade: 8.5, status: 'Aprovado', tests: [8.0, 9.0], assignments: [8.5, 8.5] },
    { subject: 'Inglês', grade: 7.0, status: 'Aprovado', tests: [7.0, 7.0], assignments: [7.0, 7.0] },
    { subject: 'Educação Física', grade: 9.5, status: 'Aprovado', tests: [9.0, 10.0], assignments: [9.5, 9.5] },
    { subject: 'Artes', grade: 8.5, status: 'Aprovado', tests: [8.0, 9.0], assignments: [8.5, 8.5] },
  ],
  '3º Bimestre': [
    // Current bimester (in progress)
    { subject: 'Matemática', grade: 8.0, status: 'Em andamento', tests: [8.0, null], assignments: [8.0, null] },
    { subject: 'Português', grade: 7.5, status: 'Em andamento', tests: [7.5, null], assignments: [7.5, null] },
    { subject: 'História', grade: 7.0, status: 'Em andamento', tests: [7.0, null], assignments: [7.0, null] },
    { subject: 'Geografia', grade: 8.5, status: 'Em andamento', tests: [8.5, null], assignments: [8.5, null] },
    { subject: 'Ciências', grade: 9.0, status: 'Em andamento', tests: [9.0, null], assignments: [9.0, null] },
    { subject: 'Inglês', grade: 7.5, status: 'Em andamento', tests: [7.5, null], assignments: [7.5, null] },
    { subject: 'Educação Física', grade: 10.0, status: 'Em andamento', tests: [10.0, null], assignments: [10.0, null] },
    { subject: 'Artes', grade: 9.5, status: 'Em andamento', tests: [9.5, null], assignments: [9.5, null] },
  ],
  '4º Bimestre': [
    // Future bimester (not started)
    { subject: 'Matemática', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'Português', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'História', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'Geografia', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'Ciências', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'Inglês', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'Educação Física', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
    { subject: 'Artes', grade: null, status: 'Não iniciado', tests: [null, null], assignments: [null, null] },
  ],
};

const StudentGrades = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('3º Bimestre');
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const handleToggleExpand = (subject: string) => {
    if (expandedSubject === subject) {
      setExpandedSubject(null);
    } else {
      setExpandedSubject(subject);
    }
  };

  const renderGradeStatus = (grade: number | null, status: string) => {
    if (grade === null) return 'N/A';
    
    if (status === 'Não iniciado') return 'N/A';
    
    return grade.toFixed(1);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aprovado':
        return 'bg-green-100 text-green-800';
      case 'Em andamento':
        return 'bg-yellow-100 text-yellow-800';
      case 'Não iniciado':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Notas</h1>
        <p className="text-gray-600">Acompanhe seu desempenho acadêmico</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {periods.map((period) => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              selectedPeriod === period
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      <Card>
        <h2 className="text-xl font-bold mb-4">{selectedPeriod}</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Disciplina
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nota Final
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                  Detalhes
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {gradesData[selectedPeriod as keyof typeof gradesData]?.map((item, idx) => (
                <React.Fragment key={idx}>
                  <tr className={`hover:bg-gray-50 ${expandedSubject === item.subject ? 'bg-gray-50' : ''}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{item.subject}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">
                        {renderGradeStatus(item.grade, item.status)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => handleToggleExpand(item.subject)}
                        className="text-primary hover:text-primary-light text-sm font-medium"
                        disabled={item.status === 'Não iniciado'}
                      >
                        {expandedSubject === item.subject ? 'Ocultar' : 'Ver detalhes'}
                      </button>
                    </td>
                  </tr>
                  
                  {expandedSubject === item.subject && (
                    <tr className="bg-gray-50">
                      <td colSpan={4} className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Provas</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Prova 1</span>
                                <span className="font-medium">
                                  {item.tests[0] !== null ? item.tests[0].toFixed(1) : 'Pendente'}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Prova 2</span>
                                <span className="font-medium">
                                  {item.tests[1] !== null ? item.tests[1].toFixed(1) : 'Pendente'}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium mb-2">Trabalhos</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Trabalho 1</span>
                                <span className="font-medium">
                                  {item.assignments[0] !== null ? item.assignments[0].toFixed(1) : 'Pendente'}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Trabalho 2</span>
                                <span className="font-medium">
                                  {item.assignments[1] !== null ? item.assignments[1].toFixed(1) : 'Pendente'}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default StudentGrades;
