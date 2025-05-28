
import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Calendar, FileText, Home, MessageSquare, Users, Plus, Search } from 'lucide-react';
import Card from '@/components/Card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navItems = [
  { title: 'Dashboard', path: '/teacher-dashboard', icon: Home },
  { title: 'Grade de Aulas', path: '/teacher-dashboard/schedule', icon: Calendar },
  { title: 'Diário de Classe', path: '/teacher-dashboard/diary', icon: FileText },
  { title: 'Lançamento de Notas', path: '/teacher-dashboard/grades', icon: FileText },
  { title: 'Mensagens', path: '/teacher-dashboard/messages', icon: MessageSquare },
];

const messages = [
  {
    id: 1,
    title: 'Reunião Pedagógica',
    sender: 'Coordenação',
    recipient: 'Todos os Professores',
    date: '12/05/2025',
    content: 'Prezados professores, informamos que haverá reunião pedagógica na próxima terça-feira, às 14h, na sala de reuniões. Solicitamos a presença de todos para discutirmos o planejamento do próximo bimestre.',
    read: true
  },
  {
    id: 2,
    title: 'Entrega de Notas',
    sender: 'Secretaria Acadêmica',
    recipient: 'Todos os Professores',
    date: '10/05/2025',
    content: 'Lembramos que o prazo para entrega das notas do primeiro bimestre se encerra nesta sexta-feira. Solicitamos que os professores que ainda não lançaram as notas no sistema o façam até o final do dia.',
    read: false
  },
  {
    id: 3,
    title: 'Aluno João Silva - Justificativa de Falta',
    sender: 'Responsável do Aluno',
    recipient: 'Prof. Exemplo',
    date: '08/05/2025',
    content: 'Prezado professor, venho justificar a ausência do meu filho João Silva nas aulas dos dias 5 e 6 de maio devido a problemas de saúde. Anexo atestado médico. Solicito orientações sobre como ele poderá recuperar o conteúdo perdido.',
    read: false,
    class: '9º Ano B',
    student: 'João Silva',
    urgent: true
  },
  {
    id: 4,
    title: 'Projeto Interdisciplinar',
    sender: 'Coordenação Pedagógica',
    recipient: 'Professores de Ciências e Geografia',
    date: '05/05/2025',
    content: 'Convidamos os professores de Ciências e Geografia para uma reunião na quinta-feira, às 10h, para discutirmos a implementação do projeto interdisciplinar sobre meio ambiente e sustentabilidade.',
    read: true,
    class: 'Múltiplas Turmas'
  },
  {
    id: 5,
    title: 'Material Didático',
    sender: 'Biblioteca',
    recipient: 'Todos os Professores',
    date: '03/05/2025',
    content: 'Informamos que os novos materiais didáticos solicitados já estão disponíveis na biblioteca. Os professores podem retirá-los mediante assinatura no livro de registro.',
    read: true
  }
];

// Classes for filtering
const classes = [
  { id: 1, name: '9º Ano A' },
  { id: 2, name: '9º Ano B' },
  { id: 3, name: '8º Ano A' },
  { id: 4, name: '8º Ano B' },
  { id: 5, name: '7º Ano A' },
];

// Message categories
const messageCategories = [
  { id: 'administrative', name: 'Administrativa' },
  { id: 'academic', name: 'Acadêmica' },
  { id: 'urgent', name: 'Urgente' },
  { id: 'general', name: 'Geral' },
];

const TeacherMessages = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showComposeForm, setShowComposeForm] = useState(false);
  const [newMessage, setNewMessage] = useState({
    title: '',
    content: '',
    recipient: '',
    category: 'general',
    urgent: false
  });
  const { toast } = useToast();

  // Filter messages based on selected filter and search term
  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          message.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (message.student && message.student.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'unread') return !message.read && matchesSearch;
    if (selectedFilter === 'urgent') return message.urgent && matchesSearch;
    if (selectedFilter.startsWith('class-')) {
      const classId = selectedFilter.replace('class-', '');
      return message.class === classes.find(c => c.id === parseInt(classId))?.name && matchesSearch;
    }
    return matchesSearch;
  });

  const handleSendMessage = () => {
    // In a real app, this would send the message to the backend
    if (!newMessage.title || !newMessage.content || !newMessage.recipient) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mensagem enviada",
      description: `Sua mensagem "${newMessage.title}" foi enviada com sucesso.`
    });

    // Reset form
    setNewMessage({
      title: '',
      content: '',
      recipient: '',
      category: 'general',
      urgent: false
    });
    setShowComposeForm(false);
  };

  return (
    <DashboardLayout navItems={navItems}>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Mensagens</h1>
        <p className="text-gray-600">Gerencie suas comunicações com alunos, responsáveis e equipe escolar</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Filters */}
        <Card className="col-span-1">
          <div className="p-4">
            <h3 className="font-medium text-lg mb-4">Filtros</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Status</p>
                <div className="space-y-2">
                  <Button 
                    variant={selectedFilter === 'all' ? 'default' : 'outline'} 
                    className="w-full justify-start"
                    onClick={() => setSelectedFilter('all')}
                  >
                    Todas as mensagens
                  </Button>
                  <Button 
                    variant={selectedFilter === 'unread' ? 'default' : 'outline'} 
                    className="w-full justify-start"
                    onClick={() => setSelectedFilter('unread')}
                  >
                    Não lidas
                  </Button>
                  <Button 
                    variant={selectedFilter === 'urgent' ? 'default' : 'outline'} 
                    className="w-full justify-start text-red-600"
                    onClick={() => setSelectedFilter('urgent')}
                  >
                    Urgentes
                  </Button>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-gray-600 mb-2">Turmas</p>
                <div className="space-y-2">
                  {classes.map(cls => (
                    <Button 
                      key={cls.id}
                      variant={selectedFilter === `class-${cls.id}` ? 'default' : 'outline'} 
                      className="w-full justify-start"
                      onClick={() => setSelectedFilter(`class-${cls.id}`)}
                    >
                      <Users size={16} className="mr-2" />
                      {cls.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Messages List */}
        <Card className="col-span-1 lg:col-span-2">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="relative flex-1 mr-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input 
                placeholder="Pesquisar mensagens..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={() => setShowComposeForm(true)}>
              <Plus size={16} className="mr-2" />
              Nova Mensagem
            </Button>
          </div>

          {showComposeForm && (
            <div className="p-4 border-b bg-gray-50">
              <h3 className="font-medium text-lg mb-4">Nova Mensagem</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <Input
                    id="title"
                    value={newMessage.title}
                    onChange={(e) => setNewMessage({...newMessage, title: e.target.value})}
                    placeholder="Digite o assunto da mensagem"
                  />
                </div>
                
                <div>
                  <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
                    Destinatário
                  </label>
                  <Select 
                    value={newMessage.recipient} 
                    onValueChange={(value) => setNewMessage({...newMessage, recipient: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o destinatário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-students">Todos os Alunos</SelectItem>
                      {classes.map(cls => (
                        <SelectItem key={cls.id} value={`class-${cls.id}`}>{cls.name}</SelectItem>
                      ))}
                      <SelectItem value="individual">Aluno Individual</SelectItem>
                      <SelectItem value="parents">Responsáveis</SelectItem>
                      <SelectItem value="staff">Equipe Escolar</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <Select 
                    value={newMessage.category} 
                    onValueChange={(value) => setNewMessage({...newMessage, category: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      {messageCategories.map(category => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="urgent"
                    checked={newMessage.urgent}
                    onChange={(e) => setNewMessage({...newMessage, urgent: e.target.checked})}
                    className="h-4 w-4 text-primary border-gray-300 rounded"
                  />
                  <label htmlFor="urgent" className="ml-2 block text-sm text-gray-700">
                    Marcar como urgente
                  </label>
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="content"
                    value={newMessage.content}
                    onChange={(e) => setNewMessage({...newMessage, content: e.target.value})}
                    placeholder="Digite sua mensagem aqui"
                    rows={5}
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setShowComposeForm(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSendMessage}>
                    Enviar Mensagem
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="divide-y">
            {filteredMessages.length > 0 ? (
              filteredMessages.map((message) => (
                <div 
                  key={message.id} 
                  className={`p-4 hover:bg-gray-50 transition-colors ${!message.read ? 'bg-primary/5' : ''}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <h3 className={`font-medium text-lg ${!message.read ? 'text-primary' : ''}`}>
                        {message.title}
                        {message.urgent && (
                          <span className="ml-2 inline-block px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-800">
                            Urgente
                          </span>
                        )}
                        {!message.read && (
                          <span className="ml-2 inline-block w-2 h-2 bg-primary rounded-full"></span>
                        )}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-500">{message.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-2">
                    <p className="text-sm text-gray-600">De: {message.sender}</p>
                    <p className="text-sm text-gray-600">Para: {message.recipient}</p>
                    {message.class && (
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                        {message.class}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 mb-3">{message.content}</p>
                  
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:text-primary-light text-sm font-medium">
                      Responder
                    </button>
                    <div className="flex space-x-3">
                      <button className="text-gray-500 hover:text-gray-700 text-sm">
                        Encaminhar
                      </button>
                      <button className="text-primary hover:text-primary-light text-sm font-medium">
                        Marcar como {message.read ? 'não lida' : 'lida'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Não há mensagens correspondentes aos critérios selecionados</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TeacherMessages;
