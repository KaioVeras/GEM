
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from '@/components/Logo';
import { 
  Calendar, 
  MessageSquare, 
  Users, 
  CheckCircle, 
  Star, 
  Mail,
  Info,
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          <div className="flex items-center">
            <Logo size="md" />
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-primary transition-colors">Recursos</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">Como Funciona</a>
            <a href="#screenshots" className="text-gray-700 hover:text-primary transition-colors">Screenshots</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Depoimentos</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm" className="hidden md:inline-flex">
                Entrar
              </Button>
            </Link>
            <Button size="sm">Demonstração</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  <span className="text-primary">GEM</span> - Gerenciador Escolar Modular
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8">
                  A solução completa para gestão escolar inteligente que conecta professores, alunos e gestores.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Solicitar Demonstração</Button>
                  <Button variant="outline" size="lg">
                    <Mail className="mr-2" /> Fale com um consultor
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary-light/20 rounded-lg p-4 shadow-lg">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                      alt="Gestão escolar inteligente" 
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">2000+ escolas usando</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recursos que Transformam a Gestão Escolar</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                O GEM oferece ferramentas completas para otimizar todos os aspectos do ambiente educacional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Comunicação Eficiente</h3>
                <p className="text-gray-600">
                  Sistema de mensagens integrado para facilitar o contato entre professores, alunos e responsáveis.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gestão de Notas</h3>
                <p className="text-gray-600">
                  Controle completo de avaliações, com lançamento de notas, médias e boletins automatizados.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Info className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Acesso a Documentos</h3>
                <p className="text-gray-600">
                  Biblioteca digital de documentos e materiais didáticos para professores e alunos.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Calendário Acadêmico</h3>
                <p className="text-gray-600">
                  Organização intuitiva de horários, eventos e atividades importantes ao longo do ano letivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Implantação simplificada em apenas três etapas para começar a transformar sua instituição.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3">Cadastro Simples</h3>
                    <p className="text-gray-600">
                      Processo rápido de cadastro de alunos, professores e colaboradores no sistema.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mt-8 md:mt-0">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3">Configuração Personalizada</h3>
                    <p className="text-gray-600">
                      Adaptação do sistema às necessidades específicas da sua instituição de ensino.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mt-8 md:mt-0">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold mb-3">Gestão Completa</h3>
                    <p className="text-gray-600">
                      Acesso a todas as ferramentas integradas para uma administração escolar eficiente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screenshots" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Conheça o GEM</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore as interfaces intuitivas do nosso sistema de gestão escolar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                <div className="bg-primary rounded-lg p-2">
                  <h4 className="font-bold mb-2 text-center text-white">Dashboard do Professor</h4>
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src="src/Images/imgDashboardProf.png" 
                      alt="Dashboard do Professor" 
                      className="rounded object-cover" 
                    />
                  </AspectRatio>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-3 border border-gray-100">
                <div className="bg-primary rounded-lg p-2">
                  <h4 className="font-bold mb-2 text-center text-white">Portal do Aluno</h4>
                  <AspectRatio ratio={16 / 10}>
                    <img 
                      src="src/Images/imgDashboardAluno.png"   
                      alt="Portal do Aluno" 
                      className="rounded object-cover" 
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Dizem Nossos Clientes</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubra como o GEM transformou a gestão de diversas instituições de ensino.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <Star className="text-yellow-500 mr-1 text-xl" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "O GEM revolucionou nossa forma de trabalhar. A comunicação com os pais e alunos melhorou significativamente e a gestão de notas se tornou muito mais eficiente."
                </p>
                <div>
                  <p className="font-semibold">Márcia Silva</p>
                  <p className="text-sm text-gray-500">Diretora, Colégio Inovação</p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-xl"/>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Implementamos o GEM há 6 meses e já notamos uma redução de 40% no tempo gasto com tarefas administrativas. Nossa equipe agora pode se concentrar no que realmente importa: ensinar."
                </p>
                <div>
                  <p className="font-semibold">Roberto Santos</p>
                  <p className="text-sm text-gray-500">Coordenador, Escola Futuro</p>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <FontAwesomeIcon icon={faStar} className="text-yellow-500 mr-1 text-xl"/>
                  <Star className="text-yellow-500 mr-1 text-xl" />
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Como professor, adoro a facilidade para lançar notas e se comunicar com os alunos. A interface é intuitiva e todo o processo se tornou mais rápido e menos suscetível a erros."
                </p>
                <div>
                  <p className="font-semibold">Ana Oliveira</p>
                  <p className="text-sm text-gray-500">Professora, Instituto Educação</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Transformar sua Escola?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
              Junte-se a milhares de instituições que já estão aproveitando os benefícios do GEM.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="font-bold">
                <FontAwesomeIcon icon={faPlay} className='mr-2'/>
                Ver Demonstração
              </Button>
              <Button size="lg" className="font-bold border-2 border-white text-white hover:bg-white/10">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Logo size="md" className="text-white" />
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Transformando a gestão escolar com tecnologia inteligente e ferramentas intuitivas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Carreiras</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Parceiros</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Produto</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Planos e Preços</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Casos de Sucesso</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <Mail className="h-5 w-5 mr-2" />
                    contato@gemescolar.com
                </li>
                <li className="flex items-center text-gray-400">
                  <Users className="h-5 w-5 mr-2" />
                    suporte@gemescolar.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} GEM. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
