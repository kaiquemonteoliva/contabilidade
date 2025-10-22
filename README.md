Projeto: Site Institucional de Contabilidade (MN & Santos)
Este projeto é um site institucional moderno e responsivo para um escritório de contabilidade, construído com as tecnologias mais recentes de frontend.

O objetivo é apresentar a empresa, seus serviços e capturar leads (clientes em potencial) através de um formulário de contato dinâmico.

🚀 Demonstração Ao Vivo (Deploy)
O site está hospedado na Vercel e é atualizado automaticamente a cada novo push na branch main.

Acesse a versão em produção aqui: https://contabilidade-six.vercel.app

✨ Funcionalidades Principais
SPA (Single Page Application): Um site de página única rápido e fluido, sem recarregamentos de página, graças ao react-router-dom.

Páginas Implementadas:

Início: Seção principal de boas-vindas.

Sobre Nós: Apresentação da empresa.

Serviços: (Página para futuros serviços).

Contato: Formulário de contato completo.

Componentização: Código limpo e organizado com componentes reutilizáveis (Header, Footer).

Formulário "Serverless": O formulário de contato envia os dados diretamente para uma planilha do Google Sheets através de um Google Apps Script. Isso funciona como um "backend" gratuito e eficiente.

Validação de Formulário: Validação no lado do cliente (frontend) para garantir que campos obrigatórios sejam preenchidos e que o e-mail tenha um formato válido.

Segurança: A URL secreta do Google Apps Script é protegida usando Variáveis de Ambiente (.env), garantindo que ela não seja exposta no GitHub.

🛠️ Tecnologias Utilizadas
Framework: React (via Vite)

Linguagem: TypeScript

Roteamento: React Router DOM

Estilização: CSS puro com Variáveis CSS

Backend (Formulário): Google Apps Script

Hospedagem & Deploy: Vercel

🏁 Como Rodar o Projeto Localmente
Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

Pré-requisitos:

Node.js (versão 18 ou superior)

- Git

1. Clonar o Repositório
Bash
git clone https://github.com/kaiquemonteoliva/contabilidade.git

2. Navegar para a Pasta Correta
Este projeto está aninhado dentro de uma pasta. É crucial entrar no diretório correto que contém o package.json.
Bash
cd contabilidade/contabilidade

3. Instalar as Dependências
Bash
npm install

4. Configurar as Variáveis de Ambiente
Para que o formulário de contato funcione localmente, você precisa informar ao Vite qual é a URL do seu Google Apps Script.
Na raiz do projeto (contabilidade/contabilidade/), crie um arquivo chamado .env.
Adicione a seguinte linha a ele, substituindo pela sua URL:
Code snippet
VITE_GOOGLE_SCRIPT_URL="COLE_A_URL_DO_SEU_APPS_SCRIPT_AQUI"

5. Iniciar o Servidor de Desenvolvimento
Bash
npm run dev

Após executar o comando, o terminal mostrará um link local para você abrir no navegador (geralmente http://localhost:5173).

🚀 Processo de Deploy (Vercel)
O deploy deste projeto é automatizado. Qualquer git push para a branch main irá disparar um novo build e atualizar o site em produção na Vercel.

Configurações Chave na Vercel:

Root Directory: contabilidade (pois o projeto não está na raiz do repositório).

Framework Preset: Vite

Build Command: npm run build

Output Directory: dist

Environment Variables: A variável VITE_GOOGLE_SCRIPT_URL deve ser configurada no painel da Vercel com a URL do Google Apps Script.
