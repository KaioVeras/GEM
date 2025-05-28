
import React from 'react';
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

const messages = [
  {
    id: 1,
    title: 'Reunião de Pais e Mestres',
    sender: 'Coordenação Pedagógica',
    date: '30/04/2025',
    content: 'Prezados pais e responsáveis, informamos que a reunião de pais e mestres será realizada no próximo sábado, dia 10/05/2025, a partir das 9h. É importante a presença de todos para acompanhamento do desempenho escolar dos alunos.',
    read: true
  },
  {
    id: 2,
    title: 'Alteração na Grade de Horários',
    sender: 'Secretaria Acadêmica',
    date: '28/04/2025',
    content: 'Informamos que a partir da próxima semana haverá alteração no horário das aulas de Matemática e Geografia. As aulas de Matemática passarão para segunda-feira, primeiro horário, e as aulas de Geografia para terça-feira, terceiro horário.',
    read: false
  },
  {
    id: 3,
    title: 'Visita ao Museu de Ciências',
    sender: 'Prof. Santos - Ciências',
    date: '25/04/2025',
    content: 'Caros alunos, estamos organizando uma visita ao Museu de Ciências no dia 12/05. A visita faz parte da avaliação do bimestre. Os interessados devem entregar a autorização assinada pelos pais até o dia 05/05.',
    read: false
  },
  {
    id: 4,
    title: 'Campeonato Interclasses',
    sender: 'Departamento de Esportes',
    date: '20/04/2025',
    content: 'Estão abertas as inscrições para o Campeonato Interclasses que ocorrerá no mês de junho. As modalidades disponíveis são: futsal, vôlei, basquete e handebol. Interessados devem procurar o professor de Educação Física.',
    read: true
  },
  {
    id: 5,
    title: 'Resultado do Simulado',
    sender: 'Coordenação Pedagógica',
    date: '15/04/2025',
    content: 'Os resultados do simulado realizado na semana passada já estão disponíveis na plataforma. Acessem a área de notas para verificar o desempenho individual e os gabaritos das provas.',
    read: true
  }
];

const StudentMessages = () => {
  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mensagens</h1>
        <p className="text-gray-600">Comunicados e mensagens da escola</p>
      </div>

      <Card className="overflow-hidden">
        <div className="divide-y">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`p-4 hover:bg-gray-50 transition-colors ${!message.read ? 'bg-primary/5' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`font-medium text-lg ${!message.read ? 'text-primary' : ''}`}>
                  {message.title}
                  {!message.read && (
                    <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full"></span>
                  )}
                </h3>
                <span className="text-sm text-gray-500">{message.date}</span>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">De: {message.sender}</p>
              <p className="text-gray-700">{message.content}</p>
              
              <div className="mt-3 flex justify-end">
                <button className="text-primary hover:text-primary-light text-sm font-medium">
                  Marcar como {message.read ? 'não lida' : 'lida'}
                </button>
              </div>
            </div>
          ))}

          {messages.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-gray-500">Não há mensagens a exibir</p>
            </div>
          )}
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default StudentMessages;
