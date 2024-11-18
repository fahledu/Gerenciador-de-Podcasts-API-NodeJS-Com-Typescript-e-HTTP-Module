Aqui está o README atualizado com a seção de execução ajustada para o uso de TypeScript e os scripts definidos no arquivo `package.json`:

---

# Podcast Manager 🎙️🎥

## Descrição

**Podcast Manager** é um aplicativo inspirado no estilo da Netflix, criado para centralizar episódios de podcasts em vídeo, organizados por categorias. Ele permite listar e filtrar episódios de forma eficiente, oferecendo uma experiência simples e intuitiva para os usuários.

---

## Domínio

- Podcasts feitos em vídeo.

---

## Features

### Principais Funcionalidades

1. **Listar episódios de podcasts organizados por categorias.**  

2. **Filtrar episódios por nome do podcast.**

---

## Como Funciona

### Endpoints Disponíveis

#### **1. Listar Episódios de Podcasts**
**Método:** `GET`  
**Descrição:** Retorna uma lista de episódios, incluindo informações como nome do podcast, título do episódio, ID do vídeo, link, capa e categorias associadas.

**Exemplo de Resposta:**
```json
[
    {
        "pocastName": "Flow",
        "episodeName": "CBUM - Flow #319",
        "videoId": "pQSuQmUfS30",
        "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
        "categories": ["saude", "bodybuild", "esporte"]
    },
    {
        "pocastName": "Flow",
        "episodeName": "RUBENS BARRICHELLO - Flow #339",
        "videoId": "4KDGTdiOV4I",
        "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
        "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        "categories": ["esporte", "corrida"]
    }
]
```

---

#### **2. Filtrar Episódios por Nome do Podcast**
**Método:** `GET`  
**Descrição:** Retorna uma lista de episódios filtrados com base no nome do podcast enviado como parâmetro pelo cliente.

**Exemplo de Request:**  
`/podcasts?p=flow`

---

## Tecnologias Utilizadas

- **Linguagem:** TypeScript
- **Backend:** Node.js (HTTP module)
- **Build:** Tsup
- **Ambiente de desenvolvimento:** TSX

---

## Como Executar o Projeto

### Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes `npm` ou `yarn`

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/podcast-manager.git
   cd podcast-manager
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o ambiente:
   - Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias.

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run start:dev
   ```

5. Para monitorar alterações no código durante o desenvolvimento:
   ```bash
   npm run start:watch
   ```

6. Para gerar a versão de produção:
   ```bash
   npm run start:dist
   ```

---

