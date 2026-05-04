# ai-agent-study-sprint
Repositório de aprendizado realizado em 5 dias como preparação para uma entrevista técnica para a vaga de Gestora de IA.

# Contexto
Recebi a oportunidade de concorrer a uma vaga que trabalha com automação e desenvolvimento de agentes de IA. As tecnologias exigidas incluíam algumas que eu nunca havia usado (N8N e Redis) e outras que precisavam de revisão prática (JavaScript, PostgreSQL, API REST).
Então, com o objetivo de me capacitar, decidi estudar de forma estruturada e documentar o processo — de 30 de abril a 5 de maio de 2025.
Assim, este repositório é o registro dessa jornada.

### Arquitetura
```
Cliente → Webhook N8N → API REST → Redis (cache) → PostgreSQL
```

## Cronograma de Estudos

| Dia | Foco | Status |
|---|---|---|
| Qui 30/04 | JavaScript moderno | ✅ Arrow functions, destructuring, spread, array methods, fetch, import/export |
| Sex 01/05 | PostgreSQL + API REST | ✅ CRUD com PostgreSQL · ✅ JOIN · ✅ API REST com Express |
| Sáb 02/05 | N8N | ✅|
| Seg 04/05 | Redis | ✅ |
| Seg 04/05 | Projeto final(Integração válida de todas as tecnologias) | ✅ |


## Como rodar o projeto
 
### Pré-requisitos
- Node.js 18+
- PostgreSQL instalado ou conta no [ElephantSQL](https://www.elephantsql.com)
- Redis instalado ou conta no [Upstash](https://upstash.com)

### Instalação
 
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ai-agent-study-sprint
cd ai-agent-study-sprint
 
# Instale as dependências da API
cd api
npm install
 
# Configure as variáveis de ambiente
cp .env.example .env
# edite o .env com suas credenciais
 
# Rode a API
npm start
```
 
### N8N
 
```bash
# Rode o n8n localmente
npx n8n
 
# Importe os workflows da pasta /n8n
# Acesse http://localhost:5678
```
 
---
