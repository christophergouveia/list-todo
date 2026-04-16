# Lista de Tarefas (TODO) - React

Uma aplicação simples e intuitiva para gerenciar suas tarefas diárias. Este projeto pessoal foi desenvolvido com React e TypeScript, utilizando Vite para uma experiência de desenvolvimento rápida.

## Funcionalidades

### Atuais
- ✅ Interface responsiva e amigável
- ✅ Marcar tarefas como concluídas

### Futuras
- 🔄 Adicionar novas tarefas
- 🔄 Remover tarefas
- 🔄 Persistência de dados (localStorage)
- 🔄 Categorias para organizar tarefas
- 🔄 Filtros e busca
- 🔄 Notificações e lembretes
- 🔄 Sincronização com nuvem
- 🔄 Temas personalizáveis

## Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Ferramenta de build e desenvolvimento rápido
- **Phosphor Icons** - Ícones modernos e acessíveis
- **ESLint** - Linting para manter a qualidade do código

## Como Instalar e Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd project-todo
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Abra o navegador em `http://localhost:5173` (ou a porta indicada no terminal).

### Build para Produção
```bash
npm run build
```

### Preview da Build
```bash
npm run preview
```

## Como Usar

1. Abra a aplicação no navegador.
2. Digite uma nova tarefa no campo de entrada.
3. Pressione Enter ou clique em "Adicionar" para incluir a tarefa na lista.
4. Clique na caixa de seleção para marcar como concluída.
5. Clique no ícone de lixeira para remover uma tarefa.

## Estrutura do Projeto

```
src/
├── App.tsx          # Componente principal
├── main.tsx         # Ponto de entrada da aplicação
├── index.css        # Estilos globais
├── App.css          # Estilos do App
├── reset.css        # Reset de estilos
└── assets/          # Recursos estáticos
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza a build de produção

## Contribuição

Este é um projeto pessoal, mas sugestões e melhorias são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto é de uso pessoal e não possui licença específica.

