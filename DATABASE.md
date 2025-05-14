<!-- # Estrutura do Banco de Dados

## Aluno
- Nome
- Sobrenome
- Número de Identificação (Matrícula)
- Contato
- Telefone
- E-mail
- Endereço (CEP)
- Código de Turma

## Professor
- Nome
- Sobrenome
- Código do Professor
- Contato
- Endereço (CEP)
- Código de Disciplina
- Código de Turmas

## Turma
- Código de Turma
- Período
- Número de Alunos
- Data de Início
- Data de Termino

## Histórico
- Código de Histórico
- Notas
- Média de Nota
- Frequência
- Período
- RA -->

# 📊 Modelo de Gestão de Dados do GEM

### Entidades Principais:

### Usuários

    Alunos:
        ID, nome, e-mail, senha, foto, matrícula, data de nascimento
        Relações: turma, responsáveis, notas, frequência, mensagens

    Professores:
        ID, nome, e-mail, senha, foto, registro profissional, formação acadêmica
        Relações: disciplinas lecionadas, turmas, diários de classe, mensagens enviadas

    Administradores:
        ID, nome, e-mail, senha, cargo, permissões
        Gerenciam todo o sistema

### 🏫 Estrutura Acadêmica

    Turmas:
        ID, nome (ex: "9º A"), ano letivo, série, período
        Relações: alunos, disciplinas, horário de aulas

    Disciplinas:
        ID, nome, carga horária, ementa
        Relações: professores, turmas, conteúdo programático

    Conteúdo Programático:
        ID, disciplina, descrição, período, objetivos, recursos
        Organiza o que será ensinado em cada disciplina

### 📝 Atividades Acadêmicas

    Diário de Classe:
        ID, data, turma, disciplina, conteúdo ministrado, professor
        Registros de presença dos alunos

    Avaliações:
        ID, título, tipo (prova, trabalho, etc), data, valor, disciplina
        Relações: notas dos alunos

    Notas:
        ID, aluno, avaliação, valor, observações
        Registro de desempenho dos alunos

    Frequência:
        ID, aluno, data, presença/ausência, justificativa
        Controle de presença dos alunos

### 💬 Comunicação

    Mensagens:
        ID, remetente, destinatários, título, conteúdo, data, status (lida/não lida)
        Comunicação entre usuários do sistema

    Notificações:
        ID, tipo, mensagem, destinatário, data, status
        Alertas sobre eventos importantes

### 📁 Documentação

    Documentos:
        ID, título, tipo, arquivo, data, descrição
        Documentos disponíveis para download

### 🔗 Relações entre Entidades

    Um Aluno pertence a uma Turma
    Um Professor leciona várias Disciplinas
    Uma Disciplina é oferecida para várias Turmas
    Um Diário de Classe registra atividades de uma Disciplina em uma Turma
    Uma Avaliação gera várias Notas (uma para cada aluno)
    Uma Turma tem um Horário de aulas semanal

### 🔄 Fluxos de Dados Principais

    Registro de Frequência:
        Professor acessa o diário de classe
        Seleciona data, turma e disciplina
        Marca presença/ausência dos alunos
        Sistema armazena os registros e notifica ausências

    Lançamento de Notas:
        Professor cria avaliação
        Registra notas para cada aluno
        Sistema calcula médias e atualiza boletim

    Comunicação:
        Usuário cria mensagem
        Seleciona destinatários
        Sistema entrega e registra leitura

    Consulta de Desempenho (Aluno):
        Aluno acessa seu perfil
        Visualiza notas, frequência e pendências
        Pode baixar documentos e relatórios
