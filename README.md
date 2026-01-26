# PWA – Sistema de Condomínio

Frontend desenvolvido como **Progressive Web App (PWA)** para um sistema de condomínio, integrado a uma API em FastAPI.

O projeto simula um sistema real de uso condominial, permitindo login de usuários, envio de mensagens ao síndico e reserva de áreas comuns, com funcionamento tanto em desktop quanto em dispositivos móveis.

---

## Funcionalidades
- Tela de login e cadastro
- Navegação por cards
- Envio de mensagens ao síndico
- Reserva de áreas comuns
- Validação de reservas duplicadas
- Feedback claro de sucesso e erro para o usuário
- Funcionamento em desktop e celular (rede local)

---

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (Vanilla JS)
- PWA (Service Worker e Manifest)
- Fetch API para comunicação com backend

---

## Fluxo do Sistema
1. Usuário realiza login
2. Acessa o menu principal
3. Escolhe enviar mensagem ou realizar reserva
4. Recebe feedback visual de sucesso ou erro
5. Sistema impede reservas duplicadas para a mesma data

---

## Integração com Backend
O frontend consome uma API REST desenvolvida em **FastAPI**, responsável por:
- Autenticação de usuários
- Persistência de mensagens
- Controle de reservas de áreas comuns

A comunicação é feita via `fetch`, com tratamento de respostas de sucesso e erro.

---

## Como Executar o Projeto

### 1️⃣ Abrir o projeto
Abra a pasta do projeto em um editor de código (ex: VS Code).

### 2️⃣ Executar com Live Server
Utilize o **Live Server** ou outro servidor local.

A aplicação estará disponível em:

```text
http://localhost:5500


### 3️⃣ Acesso pelo celular
Com o backend rodando na mesma rede, acesse no navegador do celular:

http://IP_DO_PC:5500

Exemplo:
http://192.168.0.7:5500


---

## Estrutura do Projeto
condominio-pwa-front/
├── index.html
├── home.html
├── contato.html
├── reservas.html
├── app.js
├── style.css
├── manifest.json
├── service-worker.js
└── README.md


---

## Status do Projeto
Projeto funcional, estável e pronto para demonstração em portfólio.

---

## Próximas Evoluções
- Tela administrativa do síndico
- Listagem de mensagens enviadas
- Listagem de reservas realizadas
- Status visual de datas ocupadas
- Upload completo de anexos

---

## Autor
Projeto desenvolvido por **Marcos De Lima** como parte de estudos práticos em desenvolvimento web e aplicações PWA.












