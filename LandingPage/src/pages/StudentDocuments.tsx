
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, FileText, Home, MessageSquare, Download } from 'lucide-react';
import Card from '@/components/Card';
import Button from '@/components/Button';

const navItems = [
  { title: 'Dashboard', path: '/student-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/student-dashboard/schedule', icon: Calendar },
  { title: 'Notas', path: '/student-dashboard/grades', icon: FileText },
  { title: 'Documentos', path: '/student-dashboard/documents', icon: FileText },
  { title: 'Mensagens', path: '/student-dashboard/messages', icon: MessageSquare },
];

const documents = [
  { 
    id: 1, 
    name: 'Passe Estudantil', 
    description: 'Documento para solicitação de passe estudantil',
    type: 'PDF',
    size: '245 KB',
    updated: '15/04/2025'
  },
  { 
    id: 2, 
    name: 'Declaração de Escolaridade', 
    description: 'Comprovante de matrícula na instituição',
    type: 'PDF',
    size: '180 KB',
    updated: '15/04/2025'
  },
  { 
    id: 3, 
    name: 'Histórico Parcial', 
    description: 'Histórico escolar do ano letivo atual',
    type: 'PDF',
    size: '320 KB',
    updated: '15/04/2025'
  },
  { 
    id: 4, 
    name: 'Calendário Escolar', 
    description: 'Calendário completo do ano letivo',
    type: 'PDF',
    size: '410 KB',
    updated: '10/01/2025'
  },
  { 
    id: 5, 
    name: 'Regimento Interno', 
    description: 'Normas e regras da instituição',
    type: 'PDF',
    size: '520 KB',
    updated: '05/01/2025'
  }
];

const StudentDocuments = () => {
  const handleDownload = (documentId: number) => {
    console.log(`Downloading document ${documentId}`);
    // In a real application, this would initiate a document download
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Documentos</h1>
        <p className="text-gray-600">Baixe documentos e declarações importantes</p>
      </div>

      <Card>
        <div className="space-y-4">
          {documents.map((doc) => (
            <div key={doc.id} className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="mb-3 md:mb-0">
                <h3 className="font-medium text-lg">{doc.name}</h3>
                <p className="text-gray-600 text-sm">{doc.description}</p>
                <div className="flex gap-4 mt-1">
                  <span className="text-xs text-gray-500">Tipo: {doc.type}</span>
                  <span className="text-xs text-gray-500">Tamanho: {doc.size}</span>
                  <span className="text-xs text-gray-500">Atualizado: {doc.updated}</span>
                </div>
              </div>
              <Button 
                onClick={() => handleDownload(doc.id)}
                size="sm"
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Baixar
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default StudentDocuments;
